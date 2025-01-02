
// App imports
import { Layers } from './layers';

// Third party imports
import { Source } from 'react-map-gl';

export const Boundary = ({ marker, boundary }: any) => {
    const sourceId = `boundary-source-${marker.id}`;

    if (!boundary) return <></>
    
    return (
      <Source 
        key={sourceId} 
        id={sourceId} 
        type="geojson" 
        data={boundary}
      >
        <Layers marker={marker} sourceId={sourceId}/>
      </Source>
    )
}

Boundary.displayName="Boundary";