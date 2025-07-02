// App imports
import { Section } from './section';
import './styles.scss';

export const Nav = () => {
	return (
		<div className="nav-wrapper">
            <Section section={"agent"} title={"Add Agent"} />
            <Section section={"features"} title={"Features"} />
            <Section section={"basemaps"} title={"Basemaps"} />
        </div>
	)
}

Nav.displayName="Nav";