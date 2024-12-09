export const Character = ({ src, alt, onClick }: any) => {
	return (
		<div className="agent-selector-item">
    		<img 
    			src={src} 
    			alt={alt} 
    			onClick={onClick} 
    			width="100%"
    		/>
    	</div>
	)
}

Character.displayName="Character";