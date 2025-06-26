// App imports
import { MapContainer } from './maps';
import { Logo } from './logo';
import { Nav } from './nav'
import './styles.scss';


import { Location } from './maps/location';
import { Cursor } from './maps/cursor';
import { Sections } from './sections';

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