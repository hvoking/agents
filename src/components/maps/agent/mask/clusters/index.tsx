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

export const Clusters = ({ center, layer, index }: any) => {
	const artsClusterLayer = createLayer('Arts and Entertainment', 'rgba(51, 106, 239, ', index);
	const artsClusterText = createText('Arts and Entertainment', index);

	const businessClusterLayer = createLayer('Business and Professional Services', 'rgba(255, 173, 158, ', index);
	const businessClusterText = createText('Business and Professional Services', index);

	const retailClusterLayer = createLayer('Retail', 'rgba(253, 188, 85, ', index);
	const retailClusterText = createText('Retail', index);

	return (
		<>
			<Circles
				center={center}
				layer={layer}
				label="Arts and Entertainment"
				clusterLayer={artsClusterLayer}
				textLayer={artsClusterText}
				index={index}
			/>
			<Circles 
				center={center}
				layer={layer}
				label="Business and Professional Services"
				clusterLayer={businessClusterLayer}
				textLayer={businessClusterText}
				index={index}
			/>
			<Circles
				center={center}
				layer={layer}
				label="Retail"
				clusterLayer={retailClusterLayer}
				textLayer={retailClusterText}
				index={index}
			/>
		</>
	)
}

Clusters.displayName="Clusters";