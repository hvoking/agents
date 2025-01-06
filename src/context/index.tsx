import { AgentsProvider } from './agents';
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { EventsProvider } from './events';
import { SizesProvider } from './sizes';
import { SliderProvider } from './slider';

export const MainProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <AgentsProvider>
    <ApiProvider>
    <EventsProvider>
    <SliderProvider>
    <SizesProvider>
      {children}
    </SizesProvider>
    </SliderProvider>
    </EventsProvider>
    </ApiProvider>
    </AgentsProvider>
    </GeoProvider>
  )
}

MainProvider.displayName="MainProvider";