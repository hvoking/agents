export const getFillLayer = (layerId: any, sourceId: any, fillColor: any, fillOpacity: any) => ({
	id: layerId,
	type: 'fill',
	source: sourceId,
	paint: {
		"fill-color": fillColor,
		"fill-opacity": fillOpacity
	}
});