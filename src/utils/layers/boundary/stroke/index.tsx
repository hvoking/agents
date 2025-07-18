export const getStrokeLayer = (id: any, source: any, strokeWidth: any, strokeColor: any, strokeOpacity: any) => ({
	id,
	type: 'line',
	source,
	paint: {
		'line-width': strokeWidth,
		'line-color': strokeColor,
		'line-opacity': strokeOpacity,
		'line-dasharray': [2, 2],
		'line-blur': 1.5,
	},
});