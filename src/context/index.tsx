import { MapsProvider } from './maps';
import { SizesProvider } from './sizes';
import { ApiProvider } from './api';
import { SliderProvider } from './slider';
import { TopicsProvider } from './topics';
import { SurveyProvider } from './survey';

export const MainProvider = ({children}: any) => {
  return (
    <MapsProvider>
    <TopicsProvider>
    <SliderProvider>
    <SizesProvider>
    <SurveyProvider>
    <ApiProvider>
      {children}
    </ApiProvider>
    </SurveyProvider>
    </SizesProvider>
    </SliderProvider>
    </TopicsProvider>
    </MapsProvider>    
  )
}

MainProvider.displayName="MainProvider";