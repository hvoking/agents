import { MapboxProvider } from './mapbox';
import { MarkersProvider } from './markers';
import { MapEventsProvider } from './events';
import { MaskProvider } from './mask';

export const MapsProvider = ({ children }: any) => {
	return (
		<MapboxProvider>
		<MarkersProvider>
	    <MapEventsProvider>
	    <MaskProvider>
			{children}
		</MaskProvider>
	    </MapEventsProvider>
	    </MarkersProvider>
	    </MapboxProvider>
	)
}

MapsProvider.displayName="MapsProvider";