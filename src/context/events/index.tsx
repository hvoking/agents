// App imports
import { MapEventsProvider } from './maps';
import { BoundaryEventsProvider } from './boundary';
import { DraggableProvider } from './draggable';

export const EventsProvider = ({ children }: any) => {
	return (
		<MapEventsProvider>
		<BoundaryEventsProvider>
		<DraggableProvider>
			{children}
		</DraggableProvider>
		</BoundaryEventsProvider>
		</MapEventsProvider>
	)
}

EventsProvider.displayName="EventsProvider";