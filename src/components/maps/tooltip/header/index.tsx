// App imports
import { Boundary } from './boundary';
import { Colors } from './colors';
import './styles.scss';

export const Header = ({ markerId, activeFeature, setActiveFeature }: any) => {
	return (
		<div className="header-selector">
			<Boundary 
				activeFeature={activeFeature}
				setActiveFeature={setActiveFeature} 
				markerId={markerId}
			/>
			<Colors 
				activeFeature={activeFeature}
				setActiveFeature={setActiveFeature}
			/>
		</div>
	)
}

Header.displayName="Header";