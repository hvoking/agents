// App imports
import { Logo } from './logo';
import { Selectors } from './selectors';
import './styles.scss';

export const Panel = () => {
  return (
      <div className="panel">
        <Logo/>
        <Selectors/>
      </div>
  )
}

Panel.displayName="Panel";