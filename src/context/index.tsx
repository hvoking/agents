import { AgentsProvider } from './agents';
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { EventsProvider } from './events';

export const MainProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <AgentsProvider>
    <ApiProvider>
    <EventsProvider>
      {children}
    </EventsProvider>
    </ApiProvider>
    </AgentsProvider>
    </GeoProvider>
  )
}

MainProvider.displayName="MainProvider";