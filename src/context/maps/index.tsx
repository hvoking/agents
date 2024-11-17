import { MapboxProvider } from './mapbox';
import { MarkersProvider } from './markers';
import { MapEventsProvider } from './events';

export const MapsProvider = ({ children }: any) => {
	return (
		<MapboxProvider>
		<MarkersProvider>
	    <MapEventsProvider>
			{children}
	    </MapEventsProvider>
	    </MarkersProvider>
	    </MapboxProvider>
	)
}

MapsProvider.displayName="MapsProvider";