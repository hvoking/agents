// App imports
import { Sections } from './sections';
import { Widgets } from './widgets';
import { Maps } from './maps';
import './styles.scss';

export const Viewer = () => {
  return (
    <div className="viewer">
      <Maps/>
      <Sections/>
      <Widgets/>
    </div>
  );
};

Viewer.displayName = "Viewer";