import { DraggableProvider } from './draggable';
import { BoundaryProvider } from './boundary';
import { SearchProvider } from './search';
import { MarkerEventsProvider } from './marker';

export const EventsProvider = ({children}: any) => {
  return (
    <DraggableProvider>
    <BoundaryProvider>
    <SearchProvider>
    <MarkerEventsProvider>
      {children}
    </MarkerEventsProvider>
    </SearchProvider>
    </BoundaryProvider>
    </DraggableProvider>
  )
}

EventsProvider.displayName="EventsProvider";