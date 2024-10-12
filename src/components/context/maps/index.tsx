import { MapboxProvider } from './mapbox';
import { MarkersProvider } from './markers';
import { CircleProvider } from './circle';
import { MapEventsProvider } from './events';

export const MapsProvider = ({ children }: any) => {
	return (
		<MapboxProvider>
		<MarkersProvider>
	    <CircleProvider>
	    <MapEventsProvider>
			{children}
	    </MapEventsProvider>
	    </CircleProvider>
	    </MarkersProvider>
	    </MapboxProvider>
	)
}

MapsProvider.displayName="MapsProvider";