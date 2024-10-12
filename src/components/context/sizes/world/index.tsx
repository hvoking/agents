// React imports
import { useState, useContext, createContext } from 'react';

const WorldSizesContext: React.Context<any> = createContext(null)

export const useWorldSizes = () => {
	return (
		useContext(WorldSizesContext)
	)
}

export const WorldSizesProvider = ({children}: any) => {
	const [ width, setWidth ] = useState<any>(null);
	const [ height, setHeight ] = useState<any>(null);

	const margin = {top: 0, bottom: 0, left: 20, right: 20}

	const innerWidth = width - margin.right - margin.left;
	const innerHeight = height - margin.top - margin.bottom;

	return (
		<WorldSizesContext.Provider value={{
			margin,
			width,
			height,
			setWidth,
			setHeight,
			innerWidth,
			innerHeight,
		}}>
			{children}
		</WorldSizesContext.Provider>
	)
}

WorldSizesContext.displayName = "WorldSizesContext";