import { MapsProvider } from './maps';
import { ApiProvider } from './api';
import { MarkerProvider } from './marker';

export const MainProvider = ({children}: any) => {
  return (
    <MapsProvider>
    <ApiProvider>
    <MarkerProvider>
      {children}
    </MarkerProvider>
    </ApiProvider>
    </MapsProvider>    
  )
}

MainProvider.displayName="MainProvider";