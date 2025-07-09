// App imports
import { getStrokeLayer } from './stroke';
import { getEraserLayer } from './eraser';
import { getFillLayer } from './fill';

// Third party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Boundary = ({ marker, boundary }: any) => {
  const { id, stroke, strokeWidth, strokeOpacity, fillColor, fillOpacity } = marker;
  
  const sourceId = `boundary-source-${id}`;

  if (!boundary) return <></>

  const fillId = `boundary-fill-${id}`;
  const borderId = `boundary-stroke-${id}`;
  const eraserId = `boundary-eraser-${id}`;

  const eraserLayer = getEraserLayer(eraserId, sourceId);
  const fillLayer = getFillLayer(fillId, sourceId, fillColor, fillOpacity);
  const borderLayer = getStrokeLayer(borderId, sourceId, stroke, strokeOpacity, strokeWidth);

  const layers: any = [ eraserLayer, fillLayer, borderLayer ]
    
    return (
      <Source 
        key={sourceId} 
        id={sourceId} 
        type="geojson" 
        data={boundary}
      >
        {layers.map((currentLayer: any) => 
          <Layer key={currentLayer.id} {...currentLayer}/>)
      }
      </Source>
    )
}

Boundary.displayName="Boundary";