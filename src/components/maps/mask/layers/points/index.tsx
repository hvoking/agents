// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Points = ({ boundary, layer, index }: any) => {
  const { getGeoJson, sharedGeoJsonDataMap } = useMask();
  const geoJsonData = getGeoJson(boundary, layer, 'Point');

  const sourceId = `points-source-${index}`;
  const layerId = `points-layer-${index}`;

  if (!geoJsonData) return <></>;

  sharedGeoJsonDataMap.value = {
    ...sharedGeoJsonDataMap.value,
    [sourceId]: geoJsonData.features.map((item: any) => item.properties),
  };

  const layerStyle: any = {
    id: layerId,
    type: "circle",
    source: sourceId,
    paint: {
      'circle-radius': 3,
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