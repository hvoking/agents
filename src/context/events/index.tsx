import { DraggableProvider } from './draggable';
import { BoundaryProvider } from './boundary';

export const EventsProvider = ({children}: any) => {
  return (
    <DraggableProvider>
    <BoundaryProvider>
      {children}
    </BoundaryProvider>
    </DraggableProvider>
  )
}

EventsProvider.displayName="EventsProvider";