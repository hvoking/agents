// React imports
import { useState, useEffect, useRef } from 'react';

// Context imports
import { useIsochroneApi } from 'context/api/isochrone';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Isochrone = ({ markers }: any) => {
    const { fetchIsochrone } = useIsochroneApi();
    const [ isochroneData, setIsochroneData ] = useState<any>(new Map());

    const previousMarkersRef = useRef<any>(new Map());

    useEffect(() => {
        const fetchData = async (marker: any) => {
            const { id, longitude, latitude } = marker;
            const data = await fetchIsochrone(longitude, latitude);
            setIsochroneData((prev: any) => new Map(prev).set(id, { id, data }));
        };

        const updateIsochrones = () => {
            const newMarkers: any = new Map(markers.map((m: any) => [m.id, m]));

            for (const [id, marker] of newMarkers) {
                const existingIso = isochroneData.get(id);
                const hasMoved =
                    existingIso &&
                    JSON.stringify(existingIso.data.features[0].geometry.coordinates) !==
                        JSON.stringify(marker.coordinates);

                (!existingIso || hasMoved) && fetchData(marker);
            }

            previousMarkersRef.current = newMarkers;
        };

        updateIsochrones();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ markers ]);

    if (!isochroneData.size) return null;

    return (
        <>
            {Array.from(isochroneData.values()).map((iso: any, index: number) => {
                const coordinates = iso.data.features[0].geometry.coordinates;

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
            })}
        </>
    );
};

Isochrone.displayName = "Isochrone";