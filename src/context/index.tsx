import { AgentsProvider } from './agents';
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { EventsProvider } from './events';
import { SizesProvider } from './sizes';

export const MainProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <AgentsProvider>
    <ApiProvider>
    <EventsProvider>
    <SizesProvider>
      {children}
    </SizesProvider>
    </EventsProvider>
    </ApiProvider>
    </AgentsProvider>
    </GeoProvider>
  )
}

MainProvider.displayName="MainProvider";