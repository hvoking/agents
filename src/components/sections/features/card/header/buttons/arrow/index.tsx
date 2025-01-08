// App imports
import './styles.scss';

export const Arrow = ({ setActiveCharts, activeCharts }: any) => {
	return (
		<svg 
			className="dropdown-arrow" 
			height="20" 
			width="20" 
			onClick={() => setActiveCharts((prev: any) => !prev)}
		>
		  {
		  	activeCharts ? 
		  	<polyline points="17,16 10,8 3,16"/> : 
		  	<polyline points="3,8 10,16 17,8"/>
		  }
		</svg>
	)
}

Arrow.displayName="Arrow";