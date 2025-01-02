// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Layers = ({ marker, sourceId }: any) => {
	const markerId = marker.id;

	const fillId = `boundary-fill-${markerId}`;
	const borderId = `boundary-border-${markerId}`;
	const eraserId = `boundary-eraser-${markerId}`;

	const fillLayer: any = {
	    id: fillId,
	    type: 'fill',
	    source: sourceId,
	    paint: {
			"fill-color": "rgba(0, 123, 255, 0.6)",
			"fill-opacity": 0.2
	    }
	  };

	const borderLayer: any = {
		id: borderId,
		type: 'line',
		source: sourceId,
		paint: {
			'line-width': [
				'interpolate',
				['exponential', 2],
				['zoom'],
				11, 1,
				14, 3,
				16, 6,
			],
			'line-color': 'rgba(0, 123, 255, 0.6)',
			'line-opacity': 0.8,
			'line-dasharray': [2, 2],
			'line-blur': 1.5,
		},
	};

	const eraserLayer: any = {
		id: eraserId,
		type: 'clip',
		source: sourceId,
		layout: {'clip-layer': ['building-extrusion']},
		minzoom: 14
	};

	const layers: any = [ fillLayer, borderLayer, eraserLayer ]

	return layers.map((currentLayer: any) => <Layer key={currentLayer.id} {...currentLayer}/>)
}