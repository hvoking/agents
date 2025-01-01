// React imports
import { useState, useEffect } from 'react';

// App imports
import { Layers } from './layers';

// Context imports
import { useIsochroneApi } from 'context/api/isochrone';

// Third party imports
import { Source } from 'react-map-gl';

export const Boundary = ({ marker, boundary }: any) => {
    const sourceId = `boundary-source-${marker.id}`;

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
    
    return (
      <Source 
        key={sourceId} 
        id={sourceId} 
        type="geojson" 
        data={isochroneData.features[0]}
      >
        <Layers marker={marker} sourceId={sourceId}/>
      </Source>
    )
}

Boundary.displayName="Boundary";