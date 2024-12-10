// App imports
import { SearchEventsProvider } from './search';
import { MarkerEventsProvider } from './marker';

export const EventsProvider = ({ children }: any) => {
	return (
		<SearchEventsProvider>
		<MarkerEventsProvider>
			{children}
		</MarkerEventsProvider>
		</SearchEventsProvider>
	)
}

EventsProvider.displayName="EventsProvider";