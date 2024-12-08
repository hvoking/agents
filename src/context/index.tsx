import { MapsProvider } from './maps';
import { ApiProvider } from './api';
import { MarkerProvider } from './marker';
import { ColorsProvider } from './colors';

export const MainProvider = ({children}: any) => {
  return (
    <ColorsProvider>
    <MapsProvider>
    <ApiProvider>
    <MarkerProvider>
      {children}
    </MarkerProvider>
    </ApiProvider>
    </MapsProvider> 
    </ColorsProvider>   
  )
}

MainProvider.displayName="MainProvider";