// App imports
import { Questions } from './questions';
import { MapContainer } from './map';
import { Logo } from './logo';
import './styles.scss';

export const Results = () => {
	return (
		<div className="results">
			<Logo/>
			<Questions/>
			<MapContainer/>
		</div>
	)
}

Results.displayName="Results";