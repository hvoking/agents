export const getFillLayer = (id: any, source: any, fillColor: any, fillOpacity: any) => ({
	id,
	type: 'fill',
	source,
	paint: {
		"fill-color": fillColor,
		"fill-opacity": fillOpacity
	}
});