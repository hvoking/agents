// React imports
import { useContext, createContext } from 'react';

const CircleContext: React.Context<any> = createContext(null);

export const useCircle = () => {
	return (
		useContext(CircleContext)
	)
}

export const CircleProvider = ({children}: any) => {
	const createCircle = (center: any, radiusInKm: any, points: any) => {
	    if(!points) points = 64;
	    const km = radiusInKm;
	    
	    const distanceX = km / (111.320 * Math.cos(center.latitude * Math.PI / 180));
	    const distanceY = km / 110.574;

	    let theta, x, y;
	    const ret = [];

	    for(let i=0; i<points; i++) {
	        theta = (i/points)*(2*Math.PI);
	        x = distanceX*Math.cos(theta);
	        y = distanceY*Math.sin(theta);

	        ret.push([center.longitude+x, center.latitude+y]);
	    }
	    ret.push(ret[0]);

	    return {
	        "type": "Polygon",
	        "coordinates": [ret]
	    };
	};

	return (
		<CircleContext.Provider value={{ createCircle }}>
			{children}
		</CircleContext.Provider>
	)
}

CircleContext.displayName = "CircleContext";