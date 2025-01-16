// App imports
import { ChatEventsProvider } from './chat';
import { MarkerEventsProvider } from './marker';
import { MapEventsProvider } from './maps';
import { BoundaryEventsProvider } from './boundary';

export const EventsProvider = ({ children }: any) => {
	return (
		<ChatEventsProvider>
		<MarkerEventsProvider>
		<MapEventsProvider>
		<BoundaryEventsProvider>
			{children}
		</BoundaryEventsProvider>
		</MapEventsProvider>
		</MarkerEventsProvider>
		</ChatEventsProvider>
	)
}

EventsProvider.displayName="EventsProvider";