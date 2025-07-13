// Third-party imports
import * as turf from '@turf/turf';

export const fillProperties: any = {
	Point: 'circle-color',
	Polygon: 'fill-color',
	LineString: 'line-color'
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

export const toFeatureCollection = (originalFeatures: any[], paintProperty: string) => {
	const features = originalFeatures.map((item) => {
		const { geometry, properties: itemProperties, layer } = item;

		const color = getColor(layer.paint, paintProperty);
    const properties = { ...itemProperties, ...color }

		return ({ type: 'Feature', geometry, properties })
	})
	return ({ type: 'FeatureCollection', features })
};

export const filterGeometries = (features: any[], boundary: any, source: string) =>
  features.filter(({ source: src, geometry }) =>
    src === source && 
    turf.booleanPointInPolygon(turf.centroid(geometry), boundary)
  );

const getLineFeatures = (geometry: any, properties: any) => {
  if (geometry.type === 'LineString') {
    return [{ type: 'Feature', geometry, properties }];
  } 
  else if (geometry.type === 'MultiLineString') {
    return geometry.coordinates.map((coordinates: any) => ({
      type: 'Feature',
      geometry: { type: 'LineString', coordinates },
      properties,
    }));
  }
  return [];
};

const getFeaturesInside = (lineFeatures: any[], boundary: any) => {
  return lineFeatures.flatMap((line) => {
    if (turf.booleanWithin(line, boundary)) {
      return [line];
    }
    if (turf.booleanIntersects(line, boundary)) {
      const split = turf.lineSplit(line, boundary);
      return split.features
        .filter((feature) => turf.booleanWithin(feature, boundary))
        .map((feature) => ({
          ...feature,
          properties: line.properties,
        }));
    }
    return [];
  });
};

export const filterLines = (mapFeatures: any[], boundary: any, source: string, fillProperty: any) => {
  if (!mapFeatures) return [];

  return mapFeatures.flatMap((item: any) => {
    const { geometry, layer, source: src, properties: itemProperties } = item;

    if (src !== source) return [];

    const color = getColor(layer.paint, fillProperty);
    const properties = { ...color, ...itemProperties };

    const lineFeatures = getLineFeatures(geometry, properties);
    const featuresInside = getFeaturesInside(lineFeatures, boundary);
    return featuresInside;
  });
};