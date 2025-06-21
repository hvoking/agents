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

export const filterGeometries = (mapFeatures: any[], boundary: any, source: string) =>
  mapFeatures.filter((item) => {
    if (item.source === source) {
    	return turf.booleanPointInPolygon(turf.centroid(item.geometry), boundary);
    }
    return false;
  });

export const filterLines = (mapFeatures: any[], boundary: any, source: string, geometryType: string) => {
  const lines =  mapFeatures.filter((item) => {
    if (item.source === source && item.geometry.type === geometryType) {
    	return turf.booleanIntersects(item.geometry, boundary);
    }
    return false;
  });
  return lines;
};