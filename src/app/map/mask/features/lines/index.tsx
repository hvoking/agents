// Third-party imports
import { Source, Layer } from 'react-map-gl/mapbox';

export const Lines = ({ marker }: any) => {
	const { id, data } = marker;

	const sourceId = `lines-source-${id}`;
	const layerId = `lines-layer-${id}`;

	  const layerStyle: any = {
	    id: layerId,
	    source: sourceId,
	    type: "line",
	    paint: {
	      'line-width': [
	        'interpolate',
	        ['linear'],
	        ['zoom'],
	        13, ['*', ['get', 'line-width'], 1],
	        16, ['*', ['get', 'line-width'], 2]
	      ],
	      'line-color': ['get', 'line-color'],
	    },
	  };

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