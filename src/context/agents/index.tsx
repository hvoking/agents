import { MarkersProvider } from './markers';
import { MaskProvider } from './mask';

export const AgentsProvider = ({ children }: any) => {
	return (
		<MarkersProvider>
	    <MaskProvider>
			{children}
		</MaskProvider>
	    </MarkersProvider>
	)
}

AgentsProvider.displayName="AgentsProvider";