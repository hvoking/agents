// App imports
import { getPointsStyle } from '../../styles/points';

// Context imports
import { useMask } from 'context/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Points = ({ boundary, layer, markerId }: any) => {
  const { getGeojson, sharedGeoJsonDataMap } = useMask();

  const geoJsonData = getGeojson(boundary, layer, 'Point');

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