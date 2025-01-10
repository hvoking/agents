// App imports
import { getPointsStyle } from '../../styles/points';

// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Points = ({ boundary, layer, markerId }: any) => {
  const { getGeoJson, sharedGeoJsonDataMap } = useMask();

  const geoJsonData = getGeoJson(boundary, layer, 'Point');

  const sourceId = `points-source-${markerId}`;
  const layerId = `points-layer-${markerId}`;

  if (!geoJsonData) return <></>;

  sharedGeoJsonDataMap.value = {
    ...sharedGeoJsonDataMap.value,
    [sourceId]: geoJsonData.features.map((item: any) => item.properties),
  };

  const layerStyle = getPointsStyle(layerId, sourceId);

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