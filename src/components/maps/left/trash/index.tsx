// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Trash = () => {
	const { activeTrash, setActiveTrash } =  useMarkers();
	const onClick = () => setActiveTrash((prev: boolean) => !prev);

	return (
		<div 
			className="delete-pin-wrapper" 
			onClick={onClick}
			style={{backgroundColor: activeTrash ? "rgba(33, 33, 43, 1)" : ""}}
		>
			<div className="delete-pin">
				<img
					className="delete-pin-image"
					src={`${process.env.PUBLIC_URL}/static/icons/delete.svg`} 
					alt="delete-icon"
					style={{filter: activeTrash ? "brightness(0) invert(1)" : ""}}
				/>
			</div>
		</div>
	)
}

Trash.displayName="Trash";