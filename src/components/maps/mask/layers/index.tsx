// App imports
import { Lines } from './lines';
import { Points } from './points';
import { Polygons } from './polygons';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Layers = ({ boundary, marker }: any) => {
	const { providers } = useMarkers();

	if (!boundary) return <></>;
	
	const currentProvider = providers.find((item: any) => item.name === marker.name);

	return (	
		<div>
			{currentProvider.type === 'LineString' && 
				<Lines 
					boundary={boundary} 
					layer={currentProvider.layer}
					index={marker.id}
				/>
			}
			{currentProvider.type === 'Polygon' && 
				<Polygons 
					boundary={boundary} 
					layer={currentProvider.layer}
					index={marker.id}
				/>
			}
			{currentProvider.type === 'Point' && 
				<Points 
					boundary={boundary} 
					layer={currentProvider.layer}
					index={marker.id}
				/>
			}
		</div>
	)
}

Layers.displayName="Layers";