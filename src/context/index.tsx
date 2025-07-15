import { MarkersProvider } from './markers';
import { LayersProvider } from './layers';
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { EventsProvider } from './events';
import { SizesProvider } from './sizes';

export const ContextProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <MarkersProvider>
    <LayersProvider>
    <ApiProvider>
    <EventsProvider>
    <SizesProvider>
      {children}
    </SizesProvider>
    </EventsProvider>
    </ApiProvider>
    </LayersProvider>
    </MarkersProvider>
    </GeoProvider>
  )
}

ContextProvider.displayName="ContextProvider";