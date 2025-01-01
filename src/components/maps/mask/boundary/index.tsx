
// App imports
import { Layers } from './layers';

// Third party imports
import { Source } from 'react-map-gl';

export const Boundary = ({ marker, data }: any) => {
    const sourceId = `boundary-source-${marker.id}`;

    if (!data) return <></>
    
    return (
      <Source 
        key={sourceId} 
        id={sourceId} 
        type="geojson" 
        data={data}
      >
        <Layers marker={marker} sourceId={sourceId}/>
      </Source>
    )
}

Boundary.displayName="Boundary";