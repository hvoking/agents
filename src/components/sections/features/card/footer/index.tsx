// App imports
import './styles.scss';

export const Footer = ({ provider }: any) => {
	return (
		<div className="data-provider">
			<div>data provider</div>
			<img 
				src={process.env.PUBLIC_URL + `/static/providers/${provider}.svg`} 
				alt="provider" 
			/>
		</div>
	)
}

Footer.displayName="Footer";