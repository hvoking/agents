// App imports
import { Search } from './search';
import { Switch } from './switch';
import { ReCenter } from './reCenter';
import { Title } from './title';
import { Cursor } from './cursor';
import { Left } from './left';

export const Wrapper = ({ children }: any) => {
	return (
		<div className="map-container">
			{children}
			<Title/>
			<Search/>
			<Switch/>
			<ReCenter/>
			<Cursor/>
			<Left/>
		</div>
	)
}

Wrapper.displayName="Wrapper"