// Third-party imports
import * as turf from '@turf/turf';

// Constants
export const fillProperties: Record<string, string> = {
  Points: 'circle-color',
  Polygon: 'fill-color',
  LineString: 'line-color',
};

const colorPalette = [
  'rgba(216, 131, 255, 0.6)',
  'rgba(247, 121, 118, 0.6)',
  'rgba(250, 189, 74, 0.6)',
  'rgba(255, 232, 8, 0.6)',
  'rgba(82, 227, 225, 0.6)',
  'rgba(123, 210, 223, 0.6)',
  'rgba(2, 194, 178, 0.6)',
  'rgba(255, 152, 0, 0.6)',
  'rgba(155, 48, 255, 0.6)',
  'rgba(34, 255, 102, 0.6)'
]

// Utils
const hashStringToNumber = (str: any): number =>
  [...str].reduce((acc, c) => acc + c.charCodeAt(0), 0);

const getFeatureColor = (feature: string, palette: string[]): string => {
  const hash = hashStringToNumber(feature);
  return palette[hash % palette.length];
};

export const processColor = (paint: any, property: string) => {
  const result: any = {};
  const color = paint[property];
  if (color) {
    const { r, g, b, a } = color;
    result[property] = `
      rgba(
        ${Math.round(r * 255)}, 
        ${Math.round(g * 255)}, 
        ${Math.round(b * 255)}, 
        ${a}
      )
    `.replace(/\s/g, '');
  }
  return result;
};

// Geometry Utils
const extractLineFeatures = (geometry: any, properties: Record<string, any>) => {
  if (geometry.type === 'LineString') {
    return [{ type: 'Feature', geometry, properties }];
  }
  if (geometry.type === 'MultiLineString') {
    return geometry.coordinates.map((coordinates: any) => ({
      type: 'Feature',
      geometry: { type: 'LineString', coordinates },
      properties,
    }));
  }
  return [];
};

const getFeaturesWithinBoundary = (features: any[], boundary: any) => {
  return features.flatMap((feature) => {
    if (turf.booleanWithin(feature, boundary)) return [feature];

    if (turf.booleanIntersects(feature, boundary)) {
      const split = turf.lineSplit(feature, boundary);
      return split.features
        .filter((f) => turf.booleanWithin(f, boundary))
        .map((f) => ({ ...f, properties: feature.properties }));
    }
    return [];
  });
};

// Main Exports
export const filterLines = (mapFeatures: any[], boundary: any, source: string, fillProperty: string) => {
  if (!mapFeatures) return [];

  return mapFeatures.flatMap(({ geometry, layer, properties, source: src }: any) => {
    const color = src === 'composite'
      ? getFeatureColor(properties.type, colorPalette)
      : processColor(layer.paint, fillProperty)[fillProperty];

    const enrichedProperties = { ...properties, [fillProperty]: color };
    const lineFeatures = extractLineFeatures(geometry, enrichedProperties);
    return getFeaturesWithinBoundary(lineFeatures, boundary);
  });
};

export const filterGeometries = (features: any[], boundary: any) =>
  features.filter(({ geometry }) =>
    turf.booleanPointInPolygon(turf.centroid(geometry), boundary)
  );

export const toFeatureCollection = (originalFeatures: any[], fillProperty: string): any => {
  const features = originalFeatures.map(({ geometry, properties, layer, source }: any) => {
    const color = source === 'composite'
      ? getFeatureColor(properties.type, colorPalette)
      : processColor(layer.paint, fillProperty)[fillProperty];

    return {
      type: 'Feature',
      geometry,
      properties: { ...properties, [fillProperty]: color},
    };
  });
  return { type: 'FeatureCollection', features };
};
