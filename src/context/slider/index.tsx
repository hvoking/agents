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
	const [ fillColor, setFillColor ] = useState<any>(null);

	const minBound = 0;
	const maxBound = 1;

	const colorPalette = [
	    "rgba(155, 0, 55, 1)",
	    "rgba(233, 127, 45, 1)",
	    "rgba(244, 173, 79, 1)",
	    "rgba(165, 205, 105, 1)",
	    "rgba(111, 186, 73, 1)",
	];

	return (
		<SliderContext.Provider value={{ 
			radiusPosition, setRadiusPosition,
			maxBound, minBound,
			fillColor, setFillColor,
			colorPalette

		}}>
			{children}
		</SliderContext.Provider>
	)
}

SliderContext.displayName = "SliderContext";