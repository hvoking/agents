// React imports
import { useState, useContext, createContext } from 'react';

const IsochroneApiContext: React.Context<any> = createContext(null)

export const useIsochroneApi = () => {
	return (
		useContext(IsochroneApiContext)
	)
}

export const IsochroneApiProvider = ({children}: any) => {
	const [ routingProfile, setRoutingProfile ] = useState("walking");
	const [ contoursType, setContoursType ] = useState("meters");
	const [ contoursMeters, setContoursMeters ] = useState(1000);

	const fetchIsochrone = async (longitude: any, latitude: any) => {
		const tempUrl = `
			https://api.mapbox.com/isochrone/v1/mapbox/
			${routingProfile}/
			${longitude}%2C
			${latitude}
			?contours_${contoursType}=${contoursMeters}
			&polygons=true
			&denoise=1
			&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}
		`;
		const url = tempUrl.replace(/\s/g, '');
		const res = await fetch(url);
		const receivedData = await res.json();
		return receivedData;
	}

	return (
		<IsochroneApiContext.Provider value={{ 
			fetchIsochrone,
			contoursType, setContoursType,
			contoursMeters, setContoursMeters,
		}}>
			{children}
		</IsochroneApiContext.Provider>
	)
}

IsochroneApiContext.displayName = "IsochroneApiContext";