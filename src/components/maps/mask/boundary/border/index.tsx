export const getBorderLayer = (layerId: any, sourceId: any, color: any) => ({
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
		'line-color': color,
		'line-opacity': 0.8,
		'line-dasharray': [2, 2],
		'line-blur': 1.5,
	},
});