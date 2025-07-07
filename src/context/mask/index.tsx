// React imports
import { useContext, createContext } from 'react';

// App imports
import { fillProperties, toFeatureCollection, filterGeometries, filterLines } from './helpers';

// Context imports
import { useGeo } from 'context/geo';

// Third-party imports
import { signal } from '@preact/signals-react';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => useContext(MaskContext)

export const MaskProvider = ({children}: any) => {
	const { mapRef } = useGeo();

	const sharedGeoJsonDataMap = signal({});

	const sourceIds = [
		'points-airbnb', 
		'points-foursquare', 
		'rotterdam_roads', 
		'buildings-overture'
	];

	const getGeojson = (boundary: any, source: string, geometryType: string) => {
		const fillProperty = fillProperties[geometryType] || 'fill-color';
		const isLine = geometryType === 'LineString';

		const layerIds = mapRef.current.getStyle()
		  .layers
		  .filter((layer: any) => sourceIds.includes(layer.source))
		  .map((layer: any) => layer.id);

		const mapFeatures = mapRef.current.queryRenderedFeatures({ layers: layerIds });
		
		if (!isLine) {
			const geomFeatures = filterGeometries(mapFeatures, boundary, source);
			return toFeatureCollection(geomFeatures, fillProperty);
		}
		const features = filterLines(mapFeatures, boundary, source, fillProperty);
		return { type: 'FeatureCollection', features};
	};

	return (
		<MaskContext.Provider value={{ 
			getGeojson, 
			sharedGeoJsonDataMap 
		}}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";