// Third party imports
import type { LayerProps } from 'react-map-gl';

export const createLayer = (source: string, color: string, index: any): LayerProps => ({
  id: `${source}-${index}-clusters`,
  type: 'circle',
  source: `${source}-${index}-clusters`,
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': [
      'step', ['get', 'point_count'], 
      `${color}0.6)`, 100, 
      `${color}0.8)`, 750, 
      `${color}1)`
    ],
    'circle-radius': [
      'step', ['get', 'point_count'], 
      10, 100, 
      15, 750, 
      20
    ]
  }
});