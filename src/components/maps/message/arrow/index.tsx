export const Arrow = ({ cleanSuggestions }: any) => {
	return (
		<svg 
			viewBox="0 0 20 20" 
			width="30"
			height="22"
			onClick={cleanSuggestions}
		>
			<g stroke="rgba(0, 0, 0, 1)" strokeWidth={2} strokeLinecap="round">
				<line
					x1={3}
					y1={10}
					x2={16}
					y2={10}
				/>
				<line
					x1={10}
					y1={4}
					x2={16}
					y2={10}
				/>
				<line
					x1={10}
					y1={15}
					x2={16}
					y2={10}
				/>
			</g>
		</svg>
	)
}

Arrow.displayName="Arrow";