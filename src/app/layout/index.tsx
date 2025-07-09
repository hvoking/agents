// App imports
import { Sections } from './sections';
import { Widgets } from './widgets';
import { Viewer } from './viewer';
import './styles.scss';

export const Layout = () => {
  return (
    <div className="layout">
      <Viewer/>
      <Sections/>
      <Widgets/>
    </div>
  );
};

Layout.displayName = "Layout";