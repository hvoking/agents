// App imports
import { getLinesStyle } from '../../styles/lines';

// Context imports
import { useMask } from 'context/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Lines = ({ source, marker }: any) => {
	const { id, data } = marker;

	const sourceId = `lines-source-${id}`;
	const layerId = `lines-layer-${id}`;

	const layerStyle = getLinesStyle(layerId, sourceId);

	return (
		<Source 
		  id={sourceId} 
		  type="geojson" 
		  data={data}
		>
		  <Layer {...layerStyle}/>
		</Source>
	)
}

Lines.displayName="Lines";