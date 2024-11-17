// App imports
import { Search } from './search';
import { Switch } from './switch';
import { ReCenter } from './reCenter';
import { Title } from './title';

export const Wrapper = ({ children }: any) => {
	return (
		<div className="map-container">
			{children}
			<Title/>
			<Search/>
			<Switch/>
			<ReCenter/>
		</div>
	)
}

Wrapper.displayName="Wrapper"