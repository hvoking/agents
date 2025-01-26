// App imports
import { MapContainer } from './maps';
import { Logo } from './logo';
import { Nav } from './nav'
import './styles.scss';

export const Main = () => {
  return (
    <div className="main-wrapper"> 
      <Logo/>
      <Nav/>
      <MapContainer/>
    </div>
  );
};

Main.displayName = "Main";