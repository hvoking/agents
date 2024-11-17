// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useMapbox } from '../../../maps/mapbox';

const ReverseGeocodingApiContext: React.Context<any> = createContext(null)

export const useReverseGeocodingApi = () => {
	return (
		useContext(ReverseGeocodingApiContext)
	)
}

export const ReverseGeocodingApiProvider = ({children}: any) => {
	const { viewport, isInitialState } = useMapbox();
	const [ currentAddress, setCurrentAddress ] = useState<any>(null);

	useEffect(() => {
	  const fetchData = async () => {
	    const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	reverse_api
	    	?language=en
	    	&latitude=${viewport.latitude}
	    	&longitude=${viewport.longitude}
	    `;
	    const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    const placeInformation = receivedData.address_components;
	    setCurrentAddress(placeInformation);
	  }
	  !isInitialState && viewport && fetchData();
	}, [ viewport, isInitialState ]);

	let country = '';
	let city = '';

	if (currentAddress) {
		currentAddress.forEach((item: any) => {
		    if (item.types.includes('country')) {
		        country = item.long_name;
		    }
		    if (
		    	item.types.includes('administrative_area_level_2') ||
		    	item.types.includes('locality') || 
	        	item.types.includes('postal_town') || 
	        	item.types.includes('city')
	        ) {
		        city = item.long_name;
		    }
		});
	}

	const placeInfo = city ? [ city, country ].join(", ") : country ? country : ""; 

	return (
		<ReverseGeocodingApiContext.Provider value={{ currentAddress, setCurrentAddress, placeInfo }}>
			{children}
		</ReverseGeocodingApiContext.Provider>
	)
}

ReverseGeocodingApiContext.displayName = "ReverseGeocodingApiContext";