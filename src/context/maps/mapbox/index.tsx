// React imports
import { useState, useEffect, useRef, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const MapboxContext: React.Context<any> = createContext(null);

export const useMapbox = () => {
	return (
		useContext(MapboxContext)
	)
}

export const MapboxProvider = ({children}: any) => {
	const mapRef = useRef<any>();
	const worldRef = useRef<any>();
	
	const [ placeId, setPlaceId ] = useState<any>(null);
	const [ cityName, setCityName ] = useState<any>(null);
	const [ activeBasemap, setActiveBasemap ] =  useState(false);
	const [ isInitialState, setIsInitialState ] = useState(true);
	const [ viewport, setViewport ] = useState(Locations.rotterdam);

	const mapStyle = 
		activeBasemap ? 
		"mapbox://styles/mapbox/satellite-v9" : 
		"mapbox://styles/hvoking/cm1h94yc901g001pc03jreug3";
	
	useEffect(() => {
		const viewportFlyTo = () => {
			const lat = viewport.latitude;
			const lng = viewport.longitude;
			const center = [ lng, lat ];

			mapRef.current?.flyTo({
				center: center,
				duration: 3000, 
				essential: true,
			});

			worldRef.current?.flyTo({
				center: center,
				duration: 3000, 
				essential: true,
			});	
		}
		viewport && viewportFlyTo();
	}, [ viewport ]);

	return (
		<MapboxContext.Provider value={{
			mapRef, worldRef, Locations, 
			mapStyle, setActiveBasemap,
			cityName, setCityName, 
			viewport, setViewport, 
			isInitialState, setIsInitialState,
			placeId, setPlaceId,
		}}>
			{children}
		</MapboxContext.Provider>
	)
}

MapboxContext.displayName = "MapboxContext";