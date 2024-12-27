// App imports
import './styles.scss';

export const Logo = () => {
	return (
		<img 
			className="logo-image"
			src={process.env.PUBLIC_URL + "/static/logos/logo.svg"} 
			alt="logo" 
			height="40px"
		/>
	)
}

Logo.displayName="Logo";