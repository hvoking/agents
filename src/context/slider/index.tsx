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
	
	return (
		<SliderContext.Provider value={{ 
			radiusPosition, setRadiusPosition,
			maxBound, minBound,
		}}>
			{children}
		</SliderContext.Provider>
	)
}

SliderContext.displayName = "SliderContext";