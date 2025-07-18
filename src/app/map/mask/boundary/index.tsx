// App imports
import { getFillLayer } from 'utils/layers/boundary/fill';
import { getStrokeLayer } from 'utils/layers/boundary/stroke';
import { getEraserLayer } from 'utils/layers/boundary/eraser';

// Third party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Boundary = ({ marker, boundary }: any) => {
  const { id, fillColor, fillOpacity, strokeColor, strokeWidth, strokeOpacity } = marker;
  
  const sourceId = `boundary-source-${id}`;

  if (!boundary) return <></>

  const fillId = `boundary-fill-${id}`;
  const strokeId = `boundary-stroke-${id}`;
  const eraserId = `boundary-eraser-${id}`;
  
  const fillLayer = getFillLayer(fillId, sourceId, fillColor, fillOpacity);
  const strokeLayer = getStrokeLayer(strokeId, sourceId, strokeWidth, strokeColor, strokeOpacity);
  const eraserLayer = getEraserLayer(eraserId, sourceId);

  const layers: any = [ eraserLayer, fillLayer, strokeLayer ];
    
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