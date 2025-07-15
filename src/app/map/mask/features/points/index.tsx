// App imports
import { getPointsStyle } from '../../styles/points';

// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Points = ({ marker}: any) => {
  const { id, data } = marker;

  const sourceId = `points-source-${id}`;
  const layerId = `points-layer-${id}`;

  const layerStyle = getPointsStyle(layerId, sourceId);

  return (
    <Source 
      id={sourceId} 
      type="geojson" 
      data={data}
    >
      <Layer {...layerStyle} />
    </Source>
  );
};

Points.displayName = 'Points';