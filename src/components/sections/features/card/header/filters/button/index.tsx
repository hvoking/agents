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
						y1={10}
						x2={25}
						y2={10}
						strokeWidth={1.2}
					/>
					<circle
						cx={10}
						cy={10}
						r={2}
						fill="rgba(255, 255, 255, 1)"
					/>
					<line
						x1={5}
						y1={15}
						x2={25}
						y2={15}
						strokeWidth={1.2}
					/>
					<circle
						cx={20}
						cy={15}
						r={2}
						fill="rgba(255, 255, 255, 1)"
					/>
					<line
						x1={5}
						y1={20}
						x2={25}
						y2={20}
						strokeWidth={1.2}
					/>
					<circle
						cx={10}
						cy={20}
						r={2}
						fill="rgba(255, 255, 255, 1)"
					/>
				</g>
			</svg>
		</div>
	)
}