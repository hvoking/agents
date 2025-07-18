import { MarkersProvider } from './markers';
import { MaskProvider } from './mask';
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { EventsProvider } from './events';
import { SizesProvider } from './sizes';

export const ContextProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <MarkersProvider>
    <ApiProvider>
    <EventsProvider>
    <MaskProvider>
    <SizesProvider>
      {children}
    </SizesProvider>
    </MaskProvider>
    </EventsProvider>
    </ApiProvider>
    </MarkersProvider>
    </GeoProvider>
  )
}

ContextProvider.displayName="ContextProvider";