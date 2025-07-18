import { DraggableProvider } from './draggable';
import { SearchProvider } from './search';

export const EventsProvider = ({children}: any) => {
  return (
    <DraggableProvider>
    <SearchProvider>
      {children}
    </SearchProvider>
    </DraggableProvider>
  )
}

EventsProvider.displayName="EventsProvider";