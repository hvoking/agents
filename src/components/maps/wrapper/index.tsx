// App imports
import { Location } from './location';
import { Cursor } from './cursor';
import { Search } from './search';
import { Sections } from 'components/sections';
import './styles.scss';

export const Wrapper = ({ children }: any) => {
	return (
		<div className="map-container">
			{children}
			<Sections/>
			<Location/>
			<Cursor/>
			<Search/>
		</div>
	)
}

Wrapper.displayName="Wrapper"