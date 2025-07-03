// App imports
import { Sections } from './sections';
import { Location } from './location';
import { Cursor } from './cursor';
import { Maps } from './maps';
import './styles.scss';

export const Layout = () => {
  return (
    <div className="map-wrapper">
      <Maps/>
      <Sections/>
      <Location/>
      <Cursor/>
    </div>
  );
};

Layout.displayName = "Layout";