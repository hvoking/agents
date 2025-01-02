// React imports
import { useState, useContext, createContext } from 'react';

// App imports
import { fillProperties, toFeatureCollection, filterFeatures } from './helpers';

// Context imports
import { useGeo } from 'context/geo';
import { useMarkers } from '../markers';

// Third-party imports
import { signal } from '@preact/signals-react';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => {
	return (
		useContext(MaskContext)
	)
}

export const MaskProvider = ({children}: any) => {
	const { mapRef } = useGeo();
	const { radius } = useMarkers();
	
	const [ markerGeometryType, setMarkerGeometryType ] = useState({});

	const mapFeatures = signal<any[]>([]);
	const sharedGeoJsonDataMap = signal({});

	const map = mapRef.current;
	mapFeatures.value = map?.queryRenderedFeatures();

	const getGeoJson = (boundary: any, source: string, geometryType: string) =>	{
		const features = filterFeatures(mapFeatures.value, boundary, source, geometryType);
		const fillProperty = fillProperties[geometryType] || 'fill-color';
		const featureCollection = toFeatureCollection(features, fillProperty);
		return featureCollection
    }

	return (
		<MaskContext.Provider value={{ 
			getGeoJson, 
			sharedGeoJsonDataMap,
			markerGeometryType, setMarkerGeometryType 
		}}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";