// React imports
import { useState, useEffect } from 'react';

// Context imports
import { useIsochroneApi } from 'context/api/isochrone';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Isochrone = ({ markers }: any) => {
    const { fetchIsochrone } = useIsochroneApi();

    const [isochroneData, setIsochroneData] = useState<any>([]);

    useEffect(() => {
        const fetchDataForMarker = async (marker: any) => {
            try {
                const data = await fetchIsochrone(marker.longitude, marker.latitude);
                setIsochroneData((prevData: any) => {
                    const existing = prevData.find((iso: any) => iso.id === marker.id);
                    if (existing) {
                        // Update the existing isochrone
                        return prevData.map((iso: any) =>
                            iso.id === marker.id ? { id: marker.id, data } : iso
                        );
                    } else {
                        // Add a new isochrone
                        return [...prevData, { id: marker.id, data }];
                    }
                });
            } catch (error) {
                console.error(`Error fetching isochrone data for marker ${marker.id}:`, error);
            }
        };

        markers.forEach((marker: any) => {
            const existing = isochroneData.find((iso: any) => iso.id === marker.id);
            if (!existing || existing.data.features[0].geometry.coordinates !== marker.coordinates) {
                fetchDataForMarker(marker);
            }
        });
    }, [fetchIsochrone, markers]);

    if (!isochroneData.length) return <></>;

    return (
        <>
            {isochroneData.map((iso: any) => {
                const isoLayer: any = {
                    id: `isolayer-${iso.id}`,
                    type: 'fill',
                    source: `isoSource-${iso.id}`,
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
                                    coordinates: iso.data.features[0].geometry.coordinates,
                                },
                            },
                        ],
                    },
                };

                return (
                    <Source key={iso.id} id={`isoSource-${iso.id}`} {...isoSource}>
                        <Layer {...isoLayer} />
                    </Source>
                );
            })}
        </>
    );
};

Isochrone.displayName = "Isochrone";