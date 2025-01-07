// App imports
import './styles.scss';

export const Button = ({ activateFilters, setActivateFilters }: any) => {
	return (
		<div 
			className={`map-filters-button ${activateFilters ? "active" : ""}`} 
			onClick={() => setActivateFilters((prev: boolean) => !prev)}
		>
			<svg viewBox={`0 0 30 30`}>
				<g className="filter-icon">
					<line
						x1={5}
						y1={8.5}
						x2={25}
						y2={8.5}
					/>
					<circle
						cx={10}
						cy={8.5}
						r={2}
						fill="rgba(255, 255, 255, 1)"
					/>
					<line
						x1={5}
						y1={15}
						x2={25}
						y2={15}
					/>
					<circle
						cx={20}
						cy={15}
						r={2}
						fill="rgba(255, 255, 255, 1)"
					/>
					<line
						x1={5}
						y1={21.5}
						x2={25}
						y2={21.5}
					/>
					<circle
						cx={10}
						cy={21.5}
						r={2}
						fill="rgba(255, 255, 255, 1)"
					/>
				</g>
			</svg>
		</div>
	)
}