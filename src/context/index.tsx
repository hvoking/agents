import { MapsProvider } from './maps';
import { ApiProvider } from './api';
import { MarkerProvider } from './marker';
import { ColorsProvider } from './colors';
import { EventsProvider } from './events';

export const MainProvider = ({children}: any) => {
  return (
    <ColorsProvider>
    <MapsProvider>
    <ApiProvider>
    <MarkerProvider>
    <EventsProvider>
      {children}
    </EventsProvider>
    </MarkerProvider>
    </ApiProvider>
    </MapsProvider> 
    </ColorsProvider>   
  )
}

MainProvider.displayName="MainProvider";