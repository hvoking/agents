// App imports
import { Panel } from './panel';
import { MapContainer } from './maps';
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