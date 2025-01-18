// App imports
import { ChatEventsProvider } from './chat';
import { MapEventsProvider } from './maps';
import { BoundaryEventsProvider } from './boundary';

export const EventsProvider = ({ children }: any) => {
	return (
		<ChatEventsProvider>
		<MapEventsProvider>
		<BoundaryEventsProvider>
			{children}
		</BoundaryEventsProvider>
		</MapEventsProvider>
		</ChatEventsProvider>
	)
}

EventsProvider.displayName="EventsProvider";