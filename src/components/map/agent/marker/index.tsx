// App imports
import './styles.scss';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomMarker = ({ filterProperties, propertyInfo, currentId, setCurrentId, setPropertyInfo }: any) => {
  const onClick = (e: any, marker: any) => {
    e.stopPropagation();
    setCurrentId(marker.property_id);
    propertyInfo && setPropertyInfo(marker); 
  }

  return (
    <>
      {
        filterProperties?.map((marker: any, index: number) => {
          const coordinates = marker.coordinates.split(",");
          const propertyId = marker.property_id

          const longitude = coordinates[1];
          const latitude = coordinates[0];

          const jeddahProperty = `${process.env.PUBLIC_URL}/static/jeddah/thumbnail_${propertyId}.jpg`;

          return (
            <Marker key={index} longitude={longitude} latitude={latitude}>
              <div className="marker-content-wrapper">
                <div 
                  className={currentId === propertyId || currentId === null ? "marker-content-active" : "marker-content"} 
                  onClick={(e: any) => onClick(e, marker)}
                >
                  <img src={jeddahProperty} alt="jeddah-property" className="zoomed-image"/>
                </div>
              </div>
            </Marker>
        )})
      }
    </>
  );
}

CustomMarker.displayName="CustomMarker";