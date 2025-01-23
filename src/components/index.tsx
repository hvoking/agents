// App imports
import { MapContainer } from './maps';
import { Logo } from './logo';
import { Navigation } from './navigation'
import './styles.scss';

export const Main = () => {
  return (
    <div className="main-wrapper"> 
      <Logo/>
      <Navigation/>
      <MapContainer/>
    </div>
  );
};

Main.displayName = "Main";