// App imports
import { Mask } from './mask';

// Context imports
import { useMarkers } from 'context/markers';

export const Layers = () => {
	const { markers } = useMarkers();

	return (
		<>
			{Object.entries(markers).map(([ key, value ]: any) => 
				<Mask key={key} marker={value}/>
			)}
		</>
	)
}

Layers.displayName="Layers";