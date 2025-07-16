// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

export const Cross = () => {
	const { setActivePage } = useMarkers();

	return (
		<div className="sections-cross" onClick={() => setActivePage(false)}>
			<svg 
				viewBox="0 0 40 40" 
				width={15} 
				style={{
					userSelect: "none", 
					cursor: "pointer"
				}}
			>
				<line
					x1={0}	
					x2={40}	
					y1={0}	
					y2={40}	
					stroke="rgba(126, 126, 132, 0.8)"
					strokeWidth={3}
				/>
				<line
					x1={40}	
					x2={0}	
					y1={0}	
					y2={40}	
					stroke="rgba(126, 126, 132, 0.8)"
					strokeWidth={3}
				/>
			</svg>
		</div>
	)
}

Cross.displayName="Cross";