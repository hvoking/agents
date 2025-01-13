// App imports
import { MessageEventsProvider } from './message';
import { MarkerEventsProvider } from './marker';
import { MapEventsProvider } from './maps';
import { BoundaryEventsProvider } from './boundary';

export const EventsProvider = ({ children }: any) => {
	return (
		<MessageEventsProvider>
		<MarkerEventsProvider>
		<MapEventsProvider>
		<BoundaryEventsProvider>
			{children}
		</BoundaryEventsProvider>
		</MapEventsProvider>
		</MarkerEventsProvider>
		</MessageEventsProvider>
	)
}

EventsProvider.displayName="EventsProvider";