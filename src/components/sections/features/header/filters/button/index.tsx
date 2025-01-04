// App imports
import './styles.scss';

export const Button = ({ circleColor, linesColor, setActivateFilters, setHoverActivate }: any) => {
	return (
		<div 
			className="map-filters-button" 
			onClick={() => setActivateFilters((prev: boolean) => !prev)}
			style={{background: circleColor}}
			onMouseEnter={() => setHoverActivate(true)}
			onMouseLeave={() => setHoverActivate(false)}
		>
			<svg viewBox={`0 0 30 30`}>
				<g>
					<line
						x1={5}
						y1={10}
						x2={25}
						y2={10}
						stroke={linesColor}
					/>
					<circle
						cx={10}
						cy={10}
						r={2}
						fill={circleColor}
						stroke={linesColor}
					/>
					<line
						x1={5}
						y1={15}
						x2={25}
						y2={15}
						stroke={linesColor}
					/>
					<circle
						cx={20}
						cy={15}
						r={2}
						fill={circleColor}
						stroke={linesColor}
					/>
					<line
						x1={5}
						y1={20}
						x2={25}
						y2={20}
						stroke={linesColor}
					/>
					<circle
						cx={10}
						cy={20}
						r={2}
						fill={circleColor}
						stroke={linesColor}
					/>
				</g>
			</svg>
		</div>
	)
}