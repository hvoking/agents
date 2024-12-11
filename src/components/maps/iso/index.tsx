// React imports
import { useState, useEffect } from 'react';

// Context imports
import { useIsochroneApi } from 'context/api/isochrone';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Isochrone = ({ currentMarker }: any) => {
	const { fetchIsochrone } = useIsochroneApi();

	const [ isochroneData, setIsochroneData ] = useState<any>(null);

	const { latitude, longitude } = currentMarker;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchIsochrone(longitude, latitude);
				setIsochroneData(data);
			} catch (error) {
				console.error('Error fetching isochrone data:', error);
			}
		};
		fetchData();
	}, [fetchIsochrone, longitude, latitude]);

	if (!isochroneData) return <></>;

	const isoLayer: any = {
	    id: 'isolayer',
	    type: 'fill',
	    source: 'isoSource',
	    paint: {
	      'fill-color': 'rgb(206, 171, 165)',
	      'fill-opacity': 0.4,
	    },
	  };

	const isoSource: any = {
	    type: 'geojson',
	    data: {
	      type: 'FeatureCollection',
	      features: [
	        {
	          type: 'Feature',
	          geometry: {
	            type: 'Polygon',
	            coordinates: isochroneData ? 
	            isochroneData.features[0].geometry.coordinates
	            : [],
	          },
	        },
	      ],
	    },
	  };
	
	return (
		<Source id="isoSource" {...isoSource}>
			<Layer {...isoLayer}/>
		</Source>
	)
}

Isochrone.displayName="Isochrone";