// App imports
import { SearchEventsProvider } from './search';
import { MarkerEventsProvider } from './marker';
import { MapEventsProvider } from './maps';

export const EventsProvider = ({ children }: any) => {
	return (
		<SearchEventsProvider>
		<MarkerEventsProvider>
		<MapEventsProvider>
			{children}
		</MapEventsProvider>
		</MarkerEventsProvider>
		</SearchEventsProvider>
	)
}

EventsProvider.displayName="EventsProvider";