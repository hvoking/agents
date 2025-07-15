// App imports
import { Lines } from './lines';
import { Points } from './points';
import { Polygons } from './polygons';

export const Features = ({ marker }: any) => {
	const { geometryType, layer } = marker;

	return (	
		<div>
			{geometryType === 'LineString' && 
				<Lines 
					source={layer}
					marker={marker}
				/>
			}
			{geometryType === 'Polygon' && 
				<Polygons 
					source={layer}
					marker={marker}
				/>
			}
			{geometryType === 'Point' && 
				<Points 
					source={layer}
					marker={marker}
				/>
			}
		</div>
	)
}

Features.displayName="Features";