export const getStrokeLayer = (layerId: any, sourceId: any, stroke: any, strokeOpacity: any, strokeWidth: any) => ({
	id: layerId,
	type: 'line',
	source: sourceId,
	paint: {
		'line-width': strokeWidth,
		'line-color': stroke,
		'line-opacity': strokeOpacity,
		'line-dasharray': [2, 2],
		'line-blur': 1.5,
	},
});