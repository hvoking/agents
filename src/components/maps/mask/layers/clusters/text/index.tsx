// Third party imports
import type { LayerProps } from 'react-map-gl';

export const createText = (source: string, index: any): LayerProps => ({
  id: `${source}-${index}-cluster-count`,
  type: 'symbol',
  source: `${source}-${index}-clusters`,
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-size': 12,
  },
  paint: {
    'text-color': 'rgba(255, 255, 255, 1)',
  }
});