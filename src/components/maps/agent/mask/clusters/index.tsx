// Context imports
import { createLayer } from './layers';
import { createText } from './text';

// App imports
import { Circles } from './circles';

// Community and Government
// Dining and Drinking
// Event
// Health and Medicine
// Landmarks and Outdoors
// Sports and Recreation
// Travel and Transportation

export const Clusters = ({ markers, layer }: any) => {
	const artsClusterLayer = createLayer('Arts and Entertainment', 'rgba(51, 106, 239, ');
	const artsClusterText = createText('Arts and Entertainment');

	const businessClusterLayer = createLayer('Business and Professional Services', 'rgba(255, 173, 158, ');
	const businessClusterText = createText('Business and Professional Services');

	const retailClusterLayer = createLayer('Retail', 'rgba(253, 188, 85, ');
	const retailClusterText = createText('Retail');

	return (
		<>
			<Circles
				markers={markers}
				layer={layer}
				label="Arts and Entertainment"
				clusterLayer={artsClusterLayer}
				textLayer={artsClusterText}
			/>
			<Circles 
				markers={markers}
				layer={layer}
				label="Business and Professional Services"
				clusterLayer={businessClusterLayer}
				textLayer={businessClusterText}
			/>
			<Circles
				markers={markers}
				layer={layer}
				label="Retail"
				clusterLayer={retailClusterLayer}
				textLayer={retailClusterText}
			/>
		</>
	)
}

Clusters.displayName="Clusters";