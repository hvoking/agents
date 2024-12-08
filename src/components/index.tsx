// App imports
import { Sidebar } from './sidebar';
import { MapContainer } from './map';
import './styles.scss';

export const Main = () => {
  return (
    <div className="main-wrapper">
      <Sidebar/>
      <MapContainer/>
    </div>
  );
};

Main.displayName = "Main";