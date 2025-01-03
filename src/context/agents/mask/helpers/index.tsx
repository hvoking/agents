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
        processedPaint[property] = `
        	rgba(
        		${Math.round(color.r * 255)}, 
        		${Math.round(color.g * 255)}, 
        		${Math.round(color.b * 255)}, 
        		${color.a}
        	)
        `.replace(/\s/g, '');
    }
    return processedPaint;
};

export const toFeatureCollection = (features: any[], paintProperty: string) => {
	const updatedFeatures = features.map((item) => {
		return ({
			type: 'Feature',
			geometry: item.geometry,
			properties: {
				...item.properties,
				...getColor(item.layer.paint, paintProperty),
			},
		})
	})

	return ({
		type: 'FeatureCollection',
		features: updatedFeatures
	})
};

export const filterFeatures = (mapFeatures: any[], boundary: any, source: string, geometryType: string) =>
  mapFeatures.filter((item) => {
    if (item.source === source && item.geometry.type === geometryType) {
    	const isWithin =  
	    	geometryType === 'LineString' ? 
	    	turf.booleanIntersects(item.geometry, boundary) :
	    	turf.booleanPointInPolygon(turf.centroid(item.geometry), boundary);

		return isWithin
    }
    return false;
  });