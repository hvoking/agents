// React imports
import { useContext, createContext } from 'react';

const ColorsContext: React.Context<any> = createContext(null)

export const useColors = () => {
	return (
		useContext(ColorsContext)
	)
}

export const ColorsProvider = ({children}: any) => {
	const roomsColors = {
	    "1": "rgba(120, 144, 156, 1)",
	    "2": "rgba(255, 193, 7, 1)",
	    "3": "rgba(76, 175, 80, 1)",
	    "4": "rgba(33, 150, 243, 1)",
	    "5": "rgba(244, 67, 54, 1)",
	    "6": "rgba(156, 39, 176, 1)",
	};
	
	const propertyTypeColors = {
	    "Private room in rental unit": "rgba(70, 130, 180, 1)",
	    "Entire rental unit": "rgba(34, 139, 34, 1)",
	    "Entire townhouse": "rgba(46, 139, 87, 1)",
	    "Private room in home": "rgba(100, 149, 237, 1)",
	    "Private room in townhouse": "rgba(138, 43, 226, 1)",
	    "Private room in condo": "rgba(72, 61, 139, 1)",
	    "Entire condo": "rgba(0, 128, 128, 1)",
	    "Entire home": "rgba(34, 139, 230, 1)",
	    "Shared room in rental unit": "rgba(169, 169, 169, 1)",
	    "Entire serviced apartment": "rgba(60, 179, 113, 1)",
	    "Private room in vacation home": "rgba(176, 196, 222, 1)",
	    "Entire guesthouse": "rgba(119, 136, 153, 1)",
	};

	return (
		<ColorsContext.Provider value={{ roomsColors, propertyTypeColors }}>
			{children}
		</ColorsContext.Provider>
	)
}

ColorsContext.displayName = "ColorsContext";