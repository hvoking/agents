// App imports
import { getStrokeLayer } from 'utils/layers/boundary';

// Third party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Stroke = ({ marker, boundary }: any) => {
	const { id, strokeColor, strokeWidth, strokeOpacity } = marker;
	
	const strokeId = `boundary-stroke-layer-${id}`;
	const sourceId = `boundary-stroke-source-${id}`;

	const strokeLayer: any = getStrokeLayer(strokeId, sourceId, strokeColor, strokeOpacity, strokeWidth);

	return (
		<Source 
			id={sourceId} 
			type="geojson" 
			data={boundary}
		>
		    <Layer {...strokeLayer}/>
		</Source>
	)
};

Stroke.displayName="Stroke";