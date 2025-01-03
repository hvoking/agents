// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const MarkersContext: React.Context<any> = createContext(null);

export const useMarkers = () => {
	return (
		useContext(MarkersContext)
	)
}

export const MarkersProvider = ({children}: any) => {
	const [ markers, setMarkers ] = useState<any>([]);
	const [ rejectedMarkers, setRejectedMarkers ] = useState<any>([]);
	
	const [ currentMarker, setCurrentMarker ] = useState<any>(null);
	const [ currentImage, setCurrentImage ] = useState<any>(null);
	const [ currentProvider, setCurrentProvider ] = useState<any>(null);
	const [ currentName, setCurrentName ] = useState<any>(null);
	const [ activePage, setActivePage ] = useState<any>(null);

	const [ radius, setRadius ] = useState(0.5);
	const [ addPin, setAddPin ] = useState(false);

	const providers = {
		"overture": [
			{layer: 'buildings-overture', label: 'Buildings', type: "Polygon", columnName: "subtype", graphicType: "bars"},
			{layer: 'rotterdam_roads', label: 'Roads', type: "LineString", columnName: "road_class", graphicType: "bars"},
		],
		"foursquare": [
			{layer: 'points-foursquare', label: 'Points of Interest', type: "Point", columnName: "category", graphicType: "dots"},
		],
		"inside_airbnb": [
			{layer: 'points-airbnb', label: 'Properties', type: "Point", columnName: "property_type", graphicType: "gauge"},
		],
	}

	useEffect(() => {
	   setMarkers((prev: any) => 
	      prev.filter((item: any) => !rejectedMarkers.includes(item))
	   );
	}, [ rejectedMarkers ]);

	return (
		<MarkersContext.Provider value={{
			markers, setMarkers,
			currentMarker, setCurrentMarker,
			currentImage, setCurrentImage,
			currentProvider, setCurrentProvider,
			currentName, setCurrentName,
			activePage, setActivePage,
			rejectedMarkers, setRejectedMarkers,
			radius, setRadius,
			addPin, setAddPin,
			providers
		}}>
			{children}
		</MarkersContext.Provider>
	)
}

MarkersContext.displayName = "MarkersContext";