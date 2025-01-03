
// App imports
import { getBorderLayer, getEraserLayer, getFillLayer } from './layers';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Boundary = ({ marker, boundary }: any) => {
  const markerId = marker.id;
  const sourceId = `boundary-source-${markerId}`;

  if (!boundary) return <></>

  const fillId = `boundary-fill-${markerId}`;
  const borderId = `boundary-border-${markerId}`;
  const eraserId = `boundary-eraser-${markerId}`;

  const eraserLayer = getEraserLayer(eraserId, sourceId);
  const fillLayer = getFillLayer(fillId, sourceId);
  const borderLayer = getBorderLayer(borderId, sourceId);

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