import { SvgMap } from './svgMap';
import { Ranking } from './ranking';
import './styles.scss';

export const Location = () => {
	return (
		<div className="location-graphics">
			<div className="graphics-title">
				Location
			</div>
			<SvgMap/>
			<Ranking/>
		</div>
	)
}

Location.displayName="Location";