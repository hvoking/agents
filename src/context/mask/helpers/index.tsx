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

export const filterLines = (
  mapFeatures: any[], 
  boundary: any, 
  source: string, 
  geometryType: string, 
  fillProperty: any
) => {
    const lines = mapFeatures.reduce((total: any[], item: any) => {
      const { source: src, geometry, layer, properties: itemProperties } = item;

      if (src !== source || geometry.type !== geometryType) return total;

      const color = getColor(layer.paint, fillProperty);

      const properties = { ...itemProperties, ...color }

      if (turf.booleanWithin(geometry, boundary)) {
        total.push({type: 'Feature', geometry, properties});
      } 
      else if (turf.booleanIntersects(geometry, boundary)) {
        const split = turf.lineSplit(item, boundary);

        for (const feature of split.features) {
          if (turf.booleanWithin(feature.geometry, boundary)) {
            const featureWithin = {
              type: 'Feature', 
              geometry: feature.geometry, 
              properties
            }
            total.push(featureWithin);
          }
        }
      }

      return total;
    }, []);
    return lines;
  };