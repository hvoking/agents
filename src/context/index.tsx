import { AgentsProvider } from './agents';
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { EventsProvider } from './events';
import { TilesProvider } from './tiles';

export const MainProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <AgentsProvider>
    <ApiProvider>
    <EventsProvider>
    <TilesProvider>
      {children}
    </TilesProvider>
    </EventsProvider>
    </ApiProvider>
    </AgentsProvider>
    </GeoProvider>
  )
}

MainProvider.displayName="MainProvider";