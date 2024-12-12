// React imports
import { useState, useEffect } from 'react';

// Context imports
import { useIsochroneApi } from 'context/api/isochrone';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Isochrone = ({ markers }: any) => {
    const { fetchIsochrone } = useIsochroneApi();

    const [ isochroneData, setIsochroneData ] = useState<any>([]);

    useEffect(() => {
        const fetchData = async (marker: any) => {
            const { id, longitude, latitude } = marker;
            const data = await fetchIsochrone(longitude, latitude);

            setIsochroneData((prev: any) => {
                const currentIso = prev.find((iso: any) => iso.id === id);

                if (currentIso) {
                    const isoArray = prev.map((iso: any) => 
                        iso.id === id ? 
                        { id: id, data } : 
                        iso
                    );
                    return isoArray
                }
                return [...prev, { id: id, data }];
            });
        };

        markers.forEach((marker: any) => {
            const currentIso = isochroneData.find((iso: any) => iso.id === marker.id);
            const isoCoordinates = currentIso && currentIso.data.features[0].geometry.coordinates
            const difCoordinates = isoCoordinates !== marker.coordinates;
            (!currentIso || difCoordinates) && fetchData(marker);
        });
    }, [ markers ]);

    if (!isochroneData.length) return <></>;

    return (
        <>
            {isochroneData.map((iso: any) => {
                const activeMarker = markers.find((marker: any) => marker.id === iso.id);
                const currentColor = activeMarker ? activeMarker.color : 'rgb(206, 171, 165)';
                const layerId = `isolayer-${iso.id}`;
                const sourceId = `isoSource-${iso.id}`;
                const coordinates = iso.data.features[0].geometry.coordinates;

                const isoLayer: any = {
                    id: layerId,
                    type: 'fill',
                    source: sourceId,
                    paint: {
                        'fill-color': currentColor,
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
                    <Source key={iso.id} id={sourceId} {...isoSource}>
                        <Layer {...isoLayer} />
                    </Source>
                );
            })}
        </>
    );
};

Isochrone.displayName = "Isochrone";