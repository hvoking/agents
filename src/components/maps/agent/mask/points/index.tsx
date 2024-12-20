// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Points = ({ boundary, layer, index }: any) => {
  const { getPoints } = useMask();
  const geoJsonData = getPoints(boundary, layer);

  const sourceId = `points-source-${index}`;
  const layerId = `points-layer-${index}`;

  if (!geoJsonData) return <></>;

  const layerStyle: any = {
    id: layerId,
    type: "circle",
    source: sourceId,
    paint: {
      'circle-radius': ['get', 'circle_size'],
      'circle-color': ['get', 'circle-color']
    }
  };

  return (
    <Source 
      id={sourceId} 
      type="geojson" 
      data={geoJsonData}
    >
      <Layer {...layerStyle} />
    </Source>
  );
};

Points.displayName = 'Points';