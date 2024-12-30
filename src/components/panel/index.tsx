// App imports
import { Logo } from './logo';
import { Buttons } from './buttons';
import './styles.scss';

export const Panel = () => {
  return (
      <div className="panel">
        <Logo/>
        <Buttons/>
      </div>
  )
}

Panel.displayName="Panel";