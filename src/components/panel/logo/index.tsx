// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Logo = () => {
	const { setActivePage } = useMarkers();
	const onClick = () => setActivePage(null);
	return (
		<img 
			className="logo-image"
			src={process.env.PUBLIC_URL + "/static/logos/logo.svg"} 
			alt="logo" 
			height="40px"
			onClick={onClick}
		/>
	)
}

Logo.displayName="Logo";