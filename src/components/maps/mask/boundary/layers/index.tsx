export const getEraserLayer = (layerId: any, sourceId: any) => ({
	id: layerId,
	type: 'clip',
	source: sourceId,
	layout: {'clip-layer': ['building-extrusion']},
	minzoom: 14
});

export const getFillLayer = (layerId: any, sourceId: any, markerColor: any) => ({
	id: layerId,
	type: 'fill',
	source: sourceId,
	paint: {
		"fill-color": markerColor,
		"fill-opacity": 0.4
	}
});

export const getBorderLayer = (layerId: any, sourceId: any) => ({
	id: layerId,
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
});