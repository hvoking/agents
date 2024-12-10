import { MapsProvider } from './maps';
import { ApiProvider } from './api';
import { SliderProvider } from './slider';
import { ColorsProvider } from './colors';
import { EventsProvider } from './events';

export const MainProvider = ({children}: any) => {
  return (
    <ColorsProvider>
    <MapsProvider>
    <ApiProvider>
    <SliderProvider>
    <EventsProvider>
      {children}
    </EventsProvider>
    </SliderProvider>
    </ApiProvider>
    </MapsProvider> 
    </ColorsProvider>   
  )
}

MainProvider.displayName="MainProvider";