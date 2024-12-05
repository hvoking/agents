// Context imports
import { MarkerEventsProvider } from './events';
import { SliderProvider } from './slider';
import { ColorsProvider } from './colors';

export const MarkerProvider = ({ children }: any) => {
	return (
		<SliderProvider>
		<ColorsProvider>
		<MarkerEventsProvider>
			{children}
		</MarkerEventsProvider>
		</ColorsProvider>
		</SliderProvider>
	)
}

MarkerProvider.displayName="MarkerProvider";