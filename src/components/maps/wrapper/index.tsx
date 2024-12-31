// App imports
import { Location } from './location';
import { Cursor } from './cursor';
import { ReCenter } from './reCenter';
import { Sections } from 'components/sections';
import './styles.scss';

export const Wrapper = ({ children }: any) => {
	return (
		<div className="map-container">
			{children}
			<Sections/>
			<Location/>
			<ReCenter/>
			<Cursor/>
		</div>
	)
}

Wrapper.displayName="Wrapper"