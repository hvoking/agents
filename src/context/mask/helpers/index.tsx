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

export const filterGeometries = (features: any[], boundary: any, source: string) =>
  features.filter(({ source: src, geometry }) =>
    src === source && turf.booleanPointInPolygon(turf.centroid(geometry), boundary)
  );

export const filterLines = (mapFeatures: any[], boundary: any, source: string, geometryType: string, fillProperty: any) => {
    const lines = mapFeatures.reduce((total: any[], item: any) => {
      if (item.source !== source || item.geometry.type !== geometryType) return total;

      const { geometry, layer } = item;
      const color = getColor(layer.paint, fillProperty);

      const properties = { ...item.properties, ...color }

      if (turf.booleanWithin(geometry, boundary)) {
        total.push({type: 'Feature', geometry, properties});
      } 
      else if (turf.booleanIntersects(geometry, boundary)) {
        const split = turf.lineSplit(item, boundary);

        for (const feature of split.features) {
          if (turf.booleanWithin(feature.geometry, boundary)) {
            total.push({type: 'Feature', geometry: feature.geometry, properties});
          }
        }
      }

      return total;
    }, []);
    return lines;
  };