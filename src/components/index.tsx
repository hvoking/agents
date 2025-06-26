// App imports
import { Logo } from './logo';
import { Nav } from './nav';
import { MapContainer } from './maps';
import { Sections } from './sections';
import { Location } from './location';
import { Cursor } from './cursor';
import './styles.scss';

export const Main = () => {
  return (
    <div className="main-wrapper"> 
      <Logo/>
      <Nav/>
      <div className="map-wrapper">
        <MapContainer/>
        <Sections/>
        <Location/>
        <Cursor/>
      </div>
    </div>
  );
};

Main.displayName = "Main";