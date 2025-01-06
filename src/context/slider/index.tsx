// React imports
import { useState, useContext, createContext } from 'react';

const SliderContext: React.Context<any> = createContext(null)

export const useSlider = () => {
	return (
		useContext(SliderContext)
	)
}

export const SliderProvider = ({children}: any) => {
	const [ radiusPosition, setRadiusPosition ] = useState(0.5);

	const minBound = 0;
	const maxBound = 1;

	const colorPalette = [
	    "rgba(204, 255, 230, 1)",
	    "rgba(255, 229, 204, 1)",
	    "rgba(223, 246, 255, 1)",
	    "rgba(255, 255, 204, 1)",
	    "rgba(255, 204, 203, 1)",
	];

	return (
		<SliderContext.Provider value={{ 
			radiusPosition, setRadiusPosition,
			maxBound, minBound,
			colorPalette

		}}>
			{children}
		</SliderContext.Provider>
	)
}

SliderContext.displayName = "SliderContext";