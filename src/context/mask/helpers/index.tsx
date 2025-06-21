// Third-party imports
import * as turf from '@turf/turf';

export const fillProperties: any = {
	'Point': 'circle-color',
	'Polygon': 'fill-color',
	'LineString': 'line-color'
}

export const getColor = (paint: any, property: string) => {
    const processedPaint = { ...paint };
    if (paint[property]) {
        const color = paint[property];
        const { r, g, b, a } = color;

        processedPaint[property] = `
        	rgba(
        		${Math.round(r * 255)}, 
        		${Math.round(g * 255)}, 
        		${Math.round(b * 255)}, 
        		${a}
        	)
        `.replace(/\s/g, '');
    }
    return processedPaint;
};

export const toFeatureCollection = (features: any[], paintProperty: string) => {
	const updatedFeatures = features.map((item) => {
		const { geometry, properties, layer } = item;
		const color = getColor(layer.paint, paintProperty);

		return ({
			type: 'Feature',
			geometry,
			properties: { ...properties, ...color },
		})
	})

	return ({ type: 'FeatureCollection', features: updatedFeatures })
};

export const filterFeatures = (
	mapFeatures: any[], 
	boundary: any, 
	source: string, 
	geometryType: string
) =>
  mapFeatures.filter((item) => {
  	const { source: currentSource, geometry } = item;
  	const isLine = geometryType === 'LineString';

    if (currentSource === source && geometry.type === geometryType) {
    	const isWithin =  
	    	isLine ? 
	    	turf.booleanIntersects(geometry, boundary) :
	    	turf.booleanPointInPolygon(turf.centroid(geometry), boundary);
			return isWithin
    }
    return false;
  });