// App imports
import { Sections } from './sections';
import { Widgets } from './widgets';
import { Viewer } from './viewer';
import './styles.scss';

export const Canvas = () => {
  return (
    <div className="canvas">
      <Viewer/>
      <Sections/>
      <Widgets/>
    </div>
  );
};

Canvas.displayName = "Canvas";