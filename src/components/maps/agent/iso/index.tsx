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
            const { id, longitude, latitude } = marker;
            const data = await fetchIsochrone(longitude, latitude);
            setIsochroneData(data);
        };

        fetchData(marker)
    }, [ marker ]);

    if (!isochroneData) return <></>

    const coordinates = isochroneData.features[0].geometry.coordinates;

    const sourceId = `iso-source-${index}`;
    const layerId = `iso-layer-${index}`

    const isoLayer: any = {
        id: layerId,
        type: 'fill',
        source: sourceId,
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
                        coordinates: coordinates,
                    },
                },
            ],
        },
    };

    return (
        <Source 
            key={sourceId} 
            id={sourceId} 
            {...isoSource}
        >
            <Layer {...isoLayer} />
        </Source>
    );
};

Isochrone.displayName = "Isochrone";