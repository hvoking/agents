// App imports
import { Location } from './location';
import './styles.scss';

export const Header = ({ name, marker }: any) => {
	const imagePath = process.env.PUBLIC_URL + "/static/icons/pin.svg";

	return (
		<div>
			<img className="agent-icon" src={marker.image} alt="agent-icon"/>
			<div className="agent-data">
				<div>{name}</div>
				<div className="agent-location">
					<img src={imagePath} alt="pin" width="10px"/>
					{/*<Location marker={marker}/>*/}
				</div>
			</div>
		</div>
	)
}

Header.displayName="Header";