// App imports
import './styles.scss';

export const Arrow = ({ activeCharts, setActiveCharts }: any) => {
	return (
		<svg 
			className="dropdown-arrow" 
			height="16" 
			width="14" 
			onClick={() => setActiveCharts((prev: any) => !prev)}
		>
		  {
		  	activeCharts ? 
		  	<polyline points="1,12 7,3 13,12"/> : 
		  	<polyline points="1,3 7,12 13,3"/>
		  }
		</svg>
	)
}

Arrow.displayName="Arrow";