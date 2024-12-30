// App imports
import { MapContainer } from './maps';
import { Panel } from './panel';

import './styles.scss';

export const Main = () => {
  return (
    <div className="main-wrapper"> 
      <Panel/>
      <MapContainer/>
    </div>
  );
};

Main.displayName = "Main";