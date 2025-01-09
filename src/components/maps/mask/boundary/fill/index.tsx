export const getFillLayer = (layerId: any, sourceId: any, color: any) => ({
	id: layerId,
	type: 'fill',
	source: sourceId,
	paint: {
		"fill-color": color,
		"fill-opacity": 0.4
	}
});