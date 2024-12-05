// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/maps/markers';
import { useSlider } from 'context/slider';

const MarkerEventsContext: React.Context<any> = createContext(null);

export const useMarkerEvents = () => {
	return (
		useContext(MarkerEventsContext)
	)
}

export const MarkerEventsProvider = ({children}: any) => {
	const { markers, setMarkers, currentMarker, setCurrentMarker, setRejectedMarkers } = useMarkers();
	const { setFillColor } = useSlider();

	const onDragStart = (marker: any) => {
		setFillColor(marker.color);
		setCurrentMarker(marker);
	} 

	const onClick = (marker: any) => {
		setFillColor(marker.color);
		setCurrentMarker(marker);
	}

	const onDrag = (event: any, marker: any) => {
		const { lat, lng } = event.lngLat;

		const updatedMarkers = markers.map((previousMarker: any, markers: any) => {
			const isCurrentMarker = previousMarker.id === marker.id;

			if (isCurrentMarker) {
				const updatedMarker = {
					...previousMarker, 
					latitude: lat, 
					longitude: lng
				};
				setCurrentMarker(updatedMarker)
				return updatedMarker
			}

			return previousMarker
		});
		setMarkers(updatedMarkers);
	}

	const addRejectedId = (e: any, marker: any) => {
		e.stopPropagation();
		currentMarker === marker && setCurrentMarker(null);
		setRejectedMarkers((prev: any) => [...prev, marker]);
	}

	return (
		<MarkerEventsContext.Provider value={{
			onDragStart,
			onClick,
			onDrag,
			addRejectedId,
		}}>
			{children}
		</MarkerEventsContext.Provider>
	)
}

MarkerEventsContext.displayName = "MarkerEventsContext";