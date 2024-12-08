// Context imports
import { MarkerEventsProvider } from './events';
import { SliderProvider } from './slider';

export const MarkerProvider = ({ children }: any) => {
	return (
		<SliderProvider>
		<MarkerEventsProvider>
			{children}
		</MarkerEventsProvider>
		</SliderProvider>
	)
}

MarkerProvider.displayName="MarkerProvider";