// Context imports
import { MarkerEventsProvider } from './events';

export const MarkerProvider = ({ children }: any) => {
	return (
		<MarkerEventsProvider>
			{children}
		</MarkerEventsProvider>
	)
}

MarkerProvider.displayName="MarkerProvider";