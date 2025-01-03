// App imports
import { Lines } from './lines';
import { Points } from './points';
import { Polygons } from './polygons';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Layers = ({ boundary, marker }: any) => {
	const { providers } = useMarkers();

	if (!boundary) return <></>;
	
	const layers = providers[marker.provider];

	return (
		<>
			{layers.map((item: any) => {
				return (
					<>
						{item.type === 'LineString' && 
							<Lines 
								boundary={boundary} 
								layer={item.layer}
								index={marker.id}
							/>
						}
						{item.type === 'Polygon' && 
							<Polygons 
								boundary={boundary} 
								layer={item.layer}
								index={marker.id}
							/>
						}
						{item.type === 'Point' && 
							<Points 
								boundary={boundary} 
								layer={item.layer}
								index={marker.id}
							/>
						}
					</>
				)
			})}
			
		</>
	)
}

Layers.displayName="Layers";