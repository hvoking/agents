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
		  	<polygon points="4,18 16,18 10,8"/> : 
		  	<polygon points="4,8 16,8 10,18"/>
		  }
		</svg>
	)
}

Arrow.displayName="Arrow";