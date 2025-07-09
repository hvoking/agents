// App imports
import { Sections } from './sections';
import { Widgets } from './widgets';
import { Maps } from './maps';
import './styles.scss';

export const Layout = () => {
  return (
    <div className="layout">
      <Maps/>
      <Sections/>
      <Widgets/>
    </div>
  );
};

Layout.displayName = "Layout";