// App imports
import { Location } from './location';
import { Cursor } from './cursor';
import { Sections } from 'components/sections';
import './styles.scss';

export const Wrapper = ({ children }: any) => {
	return (
		<div className="map-wrapper">
			{children}
			<Sections/>
			<Location/>
			<Cursor/>
		</div>
	)
}

Wrapper.displayName="Wrapper"