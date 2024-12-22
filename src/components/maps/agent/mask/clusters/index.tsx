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

export const Clusters = ({ boundary, layer, index }: any) => {
	const categories = [
		{ label: "Arts and Entertainment", color: "rgba(51, 106, 239, " },
		{ label: "Business and Professional Services", color: "rgba(255, 173, 158, " },
		{ label: "Retail", color: "rgba(253, 188, 85, " },
	];

	return (
		<>
			{categories.map(({ label, color }) => {
				const clusterLayer = createLayer(label, color, index);
				const textLayer = createText(label, index);
				
				return (
					<Circles
						key={label}
						boundary={boundary}
						layer={layer}
						label={label}
						clusterLayer={clusterLayer}
						textLayer={textLayer}
						index={index}
					/>
				);
			})}
		</>
	)
}

Clusters.displayName="Clusters";