// App imports
import { getBorderLayer, getEraserLayer, getFillLayer } from './layers';

// Context imports
import { useMarkers } from 'context/agents/markers';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Boundary = ({ marker, boundary }: any) => {
  const { currentMarkerId } = useMarkers();

  const { id, color } = marker;
  const sourceId = `boundary-source-${id}`;

  if (!boundary) return <></>

  const isCurrentMarker = id === currentMarkerId;

  const fillId = `boundary-fill-${id}`;
  const borderId = `boundary-border-${id}`;
  const eraserId = `boundary-eraser-${id}`;

  const eraserLayer = getEraserLayer(eraserId, sourceId);
  const fillLayer = getFillLayer(fillId, sourceId, color);
  const borderLayer = getBorderLayer(borderId, sourceId, isCurrentMarker);

  const layers: any = [ fillLayer, borderLayer, eraserLayer ]
    
    return (
      <Source 
        key={sourceId} 
        id={sourceId} 
        type="geojson" 
        data={boundary}
      >
        {layers.map((currentLayer: any) => <Layer key={currentLayer.id} {...currentLayer}/>)}
      </Source>
    )
}

Boundary.displayName="Boundary";