// App imports
import { getPolygonLayer } from 'utils/layers/features';

// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Polygons = ({ marker }: any) => {
	const { id, data } = marker;
    
    const sourceId = `polygons-source-${id}`;
  	const layerId = `polygons-layer-${id}`;

  	const polygonLayer: any = getPolygonLayer(layerId, sourceId);

	return (
		<Source 
			id={sourceId} 
			type="geojson" 
			data={data}
		>
	        <Layer {...polygonLayer}/>
	    </Source>
	);
};

Polygons.displayName = "Polygons";
