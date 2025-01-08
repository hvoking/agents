// App imports
import { SearchEventsProvider } from './search';
import { MarkerEventsProvider } from './marker';
import { MapEventsProvider } from './maps';
import { BoundaryEventsProvider } from './boundary';

export const EventsProvider = ({ children }: any) => {
	return (
		<SearchEventsProvider>
		<MarkerEventsProvider>
		<MapEventsProvider>
		<BoundaryEventsProvider>
			{children}
		</BoundaryEventsProvider>
		</MapEventsProvider>
		</MarkerEventsProvider>
		</SearchEventsProvider>
	)
}

EventsProvider.displayName="EventsProvider";