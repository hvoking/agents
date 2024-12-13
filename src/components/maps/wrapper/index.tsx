// App imports
import { Location } from './location';
import { Cursor } from './cursor';
import { ReCenter } from './reCenter';
import { Topics } from 'components/topics';
import { Message } from './message';
import './styles.scss';

export const Wrapper = ({ children }: any) => {
	return (
		<div className="map-container">
			{children}
			<Message/>
			<Location/>
			<ReCenter/>
			<Cursor/>
			<Topics/>
		</div>
	)
}

Wrapper.displayName="Wrapper"