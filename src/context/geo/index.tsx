// React imports
import { useState, useEffect, useRef, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const GeoContext: React.Context<any> = createContext(null);

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const mapRef = useRef<any>();
	const worldRef = useRef<any>();
	
	const [ placeId, setPlaceId ] = useState<any>(null);
	const [ viewport, setViewport ] = useState(Locations.rotterdam);
	const [ mapStyle, setMapStyle ] = useState("mapbox://styles/hvoking/cm16kxow500ez01pc3psqc4pv");

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
		<GeoContext.Provider value={{
			mapRef, worldRef, Locations, 
			mapStyle, setMapStyle, 
			viewport, setViewport, 
			placeId, setPlaceId,
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";