// React imports
import { useState, useEffect } from 'react';

// Context imports
import { useIsochroneApi } from 'context/api/isochrone';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Isochrone = ({ marker, index }: any) => {
    const { fetchIsochrone } = useIsochroneApi();
    const [ isochroneData, setIsochroneData ] = useState<any>(null);

    useEffect(() => {
        const fetchData = async (marker: any) => {
            const { longitude, latitude } = marker;
            const data = await fetchIsochrone(longitude, latitude);
            setIsochroneData(data);
        };

        fetchData(marker)
    }, [ marker ]);

    if (!isochroneData) return <></>

    const coordinates = isochroneData.features[0].geometry.coordinates;

    const sourceId = `iso-source-${index}`;
    const layerId = `iso-layer-${index}`

    const isoSource: any = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Polygon',
                        coordinates: coordinates,
                    },
                },
            ],
        },
    };

    const borderLayer: any = {
      id: layerId,
      type: 'line',
      source: sourceId,
      paint: {
        'line-width': [
          'interpolate',
          ['exponential', 2],
          ['zoom'],
          11, 1,
          14, 3,
          16, 6,
        ],
        'line-color': 'rgba(128, 0, 128, 0.6)',
        'line-opacity': 0.8,
        'line-dasharray': [4, 2],
        'line-blur': 1.5,
      },
    };

    return (
        <Source 
            key={sourceId} 
            id={sourceId} 
            {...isoSource}
        >
            <Layer {...borderLayer}/>
        </Source>
    );
};

Isochrone.displayName = "Isochrone";