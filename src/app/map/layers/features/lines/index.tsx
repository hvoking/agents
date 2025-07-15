// App imports
import { getLinesStyle } from '../../styles/lines';

// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Lines = ({ source, marker }: any) => {
	const { id, data } = marker;

	const sourceId = `lines-source-${id}`;
	const layerId = `lines-layer-${id}`;

	const layerStyle: any = getLinesStyle(layerId, source);

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