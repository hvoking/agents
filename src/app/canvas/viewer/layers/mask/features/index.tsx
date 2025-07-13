// App imports
import { Lines } from './lines';
import { Points } from './points';
import { Polygons } from './polygons';

export const Features = ({ boundary, marker }: any) => {
	if (!boundary) return <></>;

	const { id, geometryType, layer } = marker;
	
	return (	
		<div>
			{geometryType === 'LineString' && 
				<Lines 
					boundary={boundary} 
					layer={layer}
					markerId={id}
				/>
			}
			{geometryType === 'Polygon' && 
				<Polygons 
					boundary={boundary} 
					layer={layer}
					markerId={id}
				/>
			}
			{geometryType === 'Point' && 
				<Points 
					boundary={boundary} 
					layer={layer}
					markerId={id}
				/>
			}
		</div>
	)
}

Features.displayName="Features";