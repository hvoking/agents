// React imports
import { useState, useEffect } from 'react';

// App imports
import { Pin } from './pin';
import { Path } from './path';
import { UserPin } from './userPin';
import { Circle } from './circle';
import { Wrapper } from './wrapper';
import { Points } from './points';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';
import { useSlider } from 'context/slider';
import { useMapEvents } from 'context/maps/events';
import { useMapbox } from 'context/maps/mapbox';

// Third-party imports
import { Map } from 'react-map-gl';

export const Maps = () => {
  const { viewport, mapRef, mapStyle } = useMapbox();
  const { addPin, markers, setMarkers, currentMarker, setCurrentMarker, activeTrash, rejectedMarkers, setRejectedMarkers } = useMarkers();
  const { fillColor, setFillColor, colorPalette } = useSlider();
  const { isDragging, onDragStart, onMouseMove, onDragEnd, onClick } = useMapEvents();

  const [ isMapLoaded, setIsMapLoaded ] = useState(false);

  const existingMarkers = markers.length > 0;

  useEffect(() => {
    const updatedMarkers = existingMarkers && markers.map((marker: any) => {
      const isCurrentMarker = marker && currentMarker && marker.id === currentMarker.id;
      return (
        isCurrentMarker ? { ...marker, color: fillColor } : marker
      )
    });
    existingMarkers && setMarkers(updatedMarkers);
  }, [ fillColor ]);

  const filteredMarkers = existingMarkers && markers.filter((item: any) => !rejectedMarkers.includes(item));


  return (
    <Wrapper> 
      <Map
      ref={mapRef}
      initialViewState={viewport}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle={mapStyle}
      onClick={onClick}
      onMouseDown={onDragStart}
      onMouseMove={onMouseMove}
      onMouseUp={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onMouseMove}
      onTouchEnd={onDragEnd}
      dragPan={!isDragging}
      onLoad={() => setIsMapLoaded(true)}
    >
      {isMapLoaded && markers && <Path markers={markers} rejectedMarkers={rejectedMarkers}/>}
      {isMapLoaded && existingMarkers && filteredMarkers.map((marker: any, index: number) => (
        <Pin
          key={marker.id || index}
          marker={marker}
          currentMarker={currentMarker}
          setCurrentMarker={setCurrentMarker}
          fillColor={fillColor}
          setFillColor={setFillColor}
          setMarkers={setMarkers}
          markers={markers}
          palette={colorPalette}
          activeTrash={activeTrash}
          setRejectedMarkers={setRejectedMarkers}
        />
      ))}
      <UserPin/>
      {isMapLoaded && <Circle/>}
      {isMapLoaded && <Points/>}
    </Map>
      
    </Wrapper>
  );
};

Maps.displayName = "Maps";