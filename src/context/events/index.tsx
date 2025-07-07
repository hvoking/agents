import { DraggableProvider } from './draggable';
import { BoundaryProvider } from './boundary';
import { SearchProvider } from './search';

export const EventsProvider = ({children}: any) => {
  return (
    <DraggableProvider>
    <BoundaryProvider>
    <SearchProvider>
      {children}
    </SearchProvider>
    </BoundaryProvider>
    </DraggableProvider>
  )
}

EventsProvider.displayName="EventsProvider";