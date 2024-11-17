// App imports
import './styles.scss';

export const Logo = () => {
	return (
		<div className="graphics-logo">
			<img 
				src={process.env.PUBLIC_URL + "/static/logos/logo.svg"} 
				alt="logo" 
				height="20px"
			/>
		</div>
	)
}

Logo.displayName="Logo";