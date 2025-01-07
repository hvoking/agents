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
		  	<polyline points="17,18 10,8 3,18"/> : 
		  	<polyline points="3,8 10,18 17,8"/>
		  }
		</svg>
	)
}

Arrow.displayName="Arrow";