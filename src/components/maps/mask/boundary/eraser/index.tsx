export const getEraserLayer = (layerId: any, sourceId: any) => ({
	id: layerId,
	type: 'clip',
	source: sourceId,
	layout: {'clip-layer-types': ['symbol', 'model']},
	minzoom: 14
});