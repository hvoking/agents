import { MapsProvider } from './maps';
import { SizesProvider } from './sizes';
import { ApiProvider } from './api';
import { SliderProvider } from './slider';
import { TopicsProvider } from './topics';
import { SurveyProvider } from './survey';
import { MarkerProvider } from './marker';
import { ColorsProvider } from './colors';

export const MainProvider = ({children}: any) => {
  return (
    <MapsProvider>
    <TopicsProvider>
    <SliderProvider>
    <SizesProvider>
    <SurveyProvider>
    <ApiProvider>
    <MarkerProvider>
    <ColorsProvider>
      {children}
    </ColorsProvider>
    </MarkerProvider>
    </ApiProvider>
    </SurveyProvider>
    </SizesProvider>
    </SliderProvider>
    </TopicsProvider>
    </MapsProvider>    
  )
}

MainProvider.displayName="MainProvider";