// App imports
import { Logo } from './logo';
import { Section } from './section'
import './styles.scss';

export const Panel = () => {
  return (
      <div className="panel">
        <Logo/>
        <div className="section-wrapper">
          <Section section={"agent"} title={"Add Agent"} />
          <Section section={"features"} title={"Features"} />
          <Section section={"basemaps"} title={"Basemaps"} />
        </div>
      </div>
  )
}

Panel.displayName="Panel";