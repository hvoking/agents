// App imports
import { CancelCross } from './cross';
import { Header } from './header';
// import { Dropdown } from './dropdown';
import { Card } from './card';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';


export const Charts = () => {
  const { markers, providers } = useMarkers();

  if (!(markers.length > 0)) return <></>;

  return (
    <div className="charts">
      {markers.map((marker: any, index: number) => (
        <div key={marker.id} className="agent-card">
          <CancelCross marker={marker}/>
          <Header marker={marker}/>
          {/*<Dropdown layerOptions={providers["overture"]}/>*/}
          <Card marker={marker}/>
        </div>
      ))}
    </div>
  );
};

Charts.displayName = 'Charts';
