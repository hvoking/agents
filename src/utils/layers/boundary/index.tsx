export const getFillLayer = (
	id: string, 
	source: string, 
	fillColor: string, 
	fillOpacity: number
) => ({
	id,
	source,
	type: 'fill',
	paint: {
		"fill-color": fillColor,
		"fill-opacity": fillOpacity
	}
});

export const getStrokeLayer = (
	id: string, 
	source: string, 
	strokeColor: string, 
	strokeOpacity: number, 
	strokeWidth: number
) => ({
	id,
	source,
	type: 'line',
	paint: {
		'line-width': strokeWidth,
		'line-color': strokeColor,
		'line-opacity': strokeOpacity,
		'line-dasharray': [2, 2],
		'line-blur': 1.5,
	},
});

export const getEraserLayer = (id: string, source: string) => ({
	id,
	source,
	type: 'clip',
	layout: {'clip-layer-types': ['symbol', 'model']},
	minzoom: 14
});