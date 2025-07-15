// App imports
import { roadColors, buildingColors } from '../styles';

// Third-party imports
import * as turf from '@turf/turf';

export const fillProperties: any = {
	Points: 'circle-color',
	Polygon: 'fill-color',
	LineString: 'line-color'
}

export const processColor = (paint: any, property: string) => {
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

const getColor = (layerType: any, layerPaint: any, property: string) => {
  const resultPaint = Object.assign({}, layerPaint);
  resultPaint[property] = property === 'line-color' ? roadColors[layerType] : buildingColors[layerType];
  return resultPaint;
};

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
    const { geometry, layer, properties: itemProperties } = item;
    const color = getColor(itemProperties.type, layer.paint, fillProperty);
    // const color = getColor(layer.paint, fillProperty);
    const properties = { ...color, ...itemProperties };

    const lineFeatures = getLineFeatures(geometry, properties);
    const featuresInside = getFeaturesInside(lineFeatures, boundary);
    return featuresInside;
  });
};


export const filterGeometries = (features: any[], boundary: any) =>
  features.filter(({ geometry }) =>
    turf.booleanPointInPolygon(turf.centroid(geometry), boundary)
  );
  
export const toFeatureCollection = (originalFeatures: any[], fillProperty: string) => {
  const features = originalFeatures.map((item) => {
    const { geometry, properties: itemProperties, layer } = item;

    // const color = getColor(layer.paint, fillProperty);
    const color = processColor(layer.paint, fillProperty);
    const properties = { ...itemProperties, ...color }

    return ({ type: 'Feature', geometry, properties })
  })
  return ({ type: 'FeatureCollection', features })
};