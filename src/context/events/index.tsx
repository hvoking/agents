// App imports
import { ChatEventsProvider } from './chat';
import { MapEventsProvider } from './maps';
import { BoundaryEventsProvider } from './boundary';
import { DraggableProvider } from './draggable';

export const EventsProvider = ({ children }: any) => {
	return (
		<ChatEventsProvider>
		<MapEventsProvider>
		<BoundaryEventsProvider>
		<DraggableProvider>
			{children}
		</DraggableProvider>
		</BoundaryEventsProvider>
		</MapEventsProvider>
		</ChatEventsProvider>
	)
}

EventsProvider.displayName="EventsProvider";