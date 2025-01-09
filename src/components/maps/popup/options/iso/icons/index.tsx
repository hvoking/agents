// Context imports
import { useMarkers } from 'context/agents/markers'

const baseUrl = process.env.PUBLIC_URL + "/static/iso/";

const routingProfileValues: any = {
	"walking": baseUrl + "walking.svg",
	"cycling": baseUrl + "cycling.svg",
	"driving": baseUrl + "driving.svg"
}

export const Icons = ({ marker }: any) => {
	const { setMarkers } = useMarkers();
	const onClick = (profile: any) => {
		setMarkers((prev: any) =>
		    prev.map((item: any) => 
		        item.id === marker.id ? 
		        { ...item, routingProfile: profile } : 
		        item
		    )
		);
	}

	return (
		<div className="routing-profile">
			{Object.entries(routingProfileValues).map(([key, value]: any) => {
				const isActive = marker.routingProfile === key;

				return (
					<div
						key={key}
						onClick={() => onClick(key)} 
						className={`routing-image-wrapper ${isActive ? "active" : ""}`}
					>
						<img 
							src={isActive ? value.replace(".svg", "-active.svg") : value} 
							alt={key}
						/>
					</div>
				)
			})}
		</div>
	)
}

Icons.displayName="Icons";