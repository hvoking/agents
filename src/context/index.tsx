import { MapsProvider } from './maps';
import { ApiProvider } from './api';
import { EventsProvider } from './events';
import { ColorsProvider } from './colors';

export const MainProvider = ({children}: any) => {
  return (
    <ColorsProvider>
    <MapsProvider>
    <ApiProvider>
    <EventsProvider>
      {children}
    </EventsProvider>
    </ApiProvider>
    </MapsProvider>
    </ColorsProvider> 
  )
}

MainProvider.displayName="MainProvider";