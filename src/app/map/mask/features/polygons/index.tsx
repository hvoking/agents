// App imports
import { getPolygonsStyle } from '../../styles/polygons';

// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Polygons = ({ marker }: any) => {
	const { id, data } = marker;
    const sourceId = `polygons-source-${id}`;
  	const layerId = `polygons-layer-${id}`;

	const layerStyle = getPolygonsStyle(layerId, sourceId);

	return (
		<Source 
			id={sourceId} 
			type="geojson" 
			data={data}
		>
	        <Layer {...layerStyle}/>
	    </Source>
	);
};

Polygons.displayName = "Polygons";
