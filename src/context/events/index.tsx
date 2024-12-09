// App imports
import { SearchEventsProvider } from './search';

export const EventsProvider = ({ children }: any) => {
	return (
		<SearchEventsProvider>
			{children}
		</SearchEventsProvider>
	)
}

EventsProvider.displayName="EventsProvider";