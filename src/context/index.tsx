import { AgentsProvider } from './agents';
import { GeoProvider } from './geo';
import { ApiProvider } from './api';
import { EventsProvider } from './events';
import { ColorsProvider } from './colors';

export const MainProvider = ({children}: any) => {
  return (
    <ColorsProvider>
    <GeoProvider>
    <AgentsProvider>
    <ApiProvider>
    <EventsProvider>
      {children}
    </EventsProvider>
    </ApiProvider>
    </AgentsProvider>
    </GeoProvider>
    </ColorsProvider> 
  )
}

MainProvider.displayName="MainProvider";