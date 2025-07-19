export const getStrokeLayer = (id: any, source: any) => ({
	id,
	source,
	type: "line",
	paint: {
		'line-width': [
			'interpolate',
			['linear'],
			['zoom'],
			13, ['*', ['get', 'line-width'], 1],
			16, ['*', ['get', 'line-width'], 2]
		],
	'line-color': ['get', 'line-color'],
	},
})

export const getPointsLayer = (id: any, source: any) => ({
    id,
    source,
    type: "circle",
    paint: {
      'circle-radius': 3,
      'circle-color': ['get', 'circle-color']
    }
})

export const getPolygonLayer = (id: any, source: any) => ({
	id,
	source,
	type: "fill-extrusion",
	paint: {
		"fill-extrusion-color": ["get", "fill-color"],
		'fill-extrusion-height': ['coalesce', ['get', 'height'], 10],
		'fill-extrusion-base': 0,
		"fill-extrusion-vertical-gradient": true,
		"fill-extrusion-opacity": 0.6,
	},
})