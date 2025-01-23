// App imports
import { Section } from './section';
import './styles.scss';

export const Navigation = () => {
	return (
		<div className="navigation-wrapper">
        <Section section={"agent"} title={"Add Agent"} />
        <Section section={"features"} title={"Features"} />
        <Section section={"basemaps"} title={"Basemaps"} />
      </div>
	)
}

Navigation.displayName="Navigation";