// Context imports
import { usePinsData } from '../../../../context/api/data/pins';
import { useTopics } from '../../../../context/topics';

// Third party imports
import { Source, Layer, LayerProps } from 'react-map-gl';

export const Points = () => {
	const { pinsData } = usePinsData();
	const { currentQuestionId } = useTopics();

	const unclusteredPointLayer: LayerProps = {
	  id: 'unclustered-point',
	  type: 'circle',
	  source: 'question-pin',
	  paint: {
	    'circle-color': ['get', 'color'],
	    'circle-radius': 5,
	  }
	};

	const filteredData = 
		currentQuestionId ? 
		pinsData.filter((item: any) => item.question_id === currentQuestionId) :
		pinsData ? pinsData : [];

	const geojsonPoints: any = filteredData.reduce((total: any, item: any) => {
		const { geom, ...properties } = item;
		const coord = geom.coordinates;
		total.push({
			type: "Feature",
		    geometry: { 
		    	type: "Point", 
		    	coordinates: [ 
		    		coord[0], 
		    		coord[1] 
		    	] 
		    },
			properties: {...properties,}
		});
		return total
	}, []);

	const geojsonWrapper: any = geojsonPoints && {
		"type": "FeatureCollection",
		"features": geojsonPoints
	}

	return (
		<Source
		  id="question-pin"
		  type="geojson"
		  data={geojsonWrapper}
		>
		  <Layer {...unclusteredPointLayer}/>
		</Source>
	)
}

Points.displayName="Points";