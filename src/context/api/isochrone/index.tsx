// React imports
import { useContext, createContext } from 'react';

const IsochroneApiContext: React.Context<any> = createContext(null)

export const useIsochroneApi = () => useContext(IsochroneApiContext)

export const IsochroneApiProvider = ({children}: any) => {

	const fetchIsochrone = async ({ routingProfile, longitude, latitude, contoursMinutes }: any) => {
		const tempUrl = `
			https://api.mapbox.com/isochrone/v1/mapbox/
			${routingProfile}/
			${longitude}%2C
			${latitude}
			?contours_minutes=${contoursMinutes}
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
		<IsochroneApiContext.Provider value={{ fetchIsochrone }}>
			{children}
		</IsochroneApiContext.Provider>
	)
}

IsochroneApiContext.displayName = "IsochroneApiContext";