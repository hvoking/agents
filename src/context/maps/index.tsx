import { MapboxProvider } from './mapbox';
import { MarkersProvider } from './markers';
import { MaskProvider } from './mask';

export const MapsProvider = ({ children }: any) => {
	return (
		<MapboxProvider>
		<MarkersProvider>
	    <MaskProvider>
			{children}
		</MaskProvider>
	    </MarkersProvider>
	    </MapboxProvider>
	)
}

MapsProvider.displayName="MapsProvider";