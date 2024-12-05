import { MapboxProvider } from './mapbox';
import { MarkersProvider } from './markers';
import { MapEventsProvider } from './events';
import { StylesProvider } from './styles';
import { MaskProvider } from './mask';

export const MapsProvider = ({ children }: any) => {
	return (
		<MapboxProvider>
		<MarkersProvider>
	    <MapEventsProvider>
	    <StylesProvider>
	    <MaskProvider>
			{children}
		</MaskProvider>
	    </StylesProvider>
	    </MapEventsProvider>
	    </MarkersProvider>
	    </MapboxProvider>
	)
}

MapsProvider.displayName="MapsProvider";