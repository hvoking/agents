import { DraggableProvider } from './draggable';
import { SearchProvider } from './search';
import { MarkerEventsProvider } from './marker';

export const EventsProvider = ({children}: any) => {
  return (
    <DraggableProvider>
    <SearchProvider>
    <MarkerEventsProvider>
      {children}
    </MarkerEventsProvider>
    </SearchProvider>
    </DraggableProvider>
  )
}

EventsProvider.displayName="EventsProvider";