// App imports
import { listOfBaseMaps } from './options';
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';

export const Basemaps = () => {
	const { setMapStyle } = useGeo();

	const dark: any = listOfBaseMaps[0];
	const light: any = listOfBaseMaps[1];
	const satellite: any = listOfBaseMaps[2];
	const color: any = listOfBaseMaps[3];

	return (
		<div className="basemap-selector">
			<div className="basemap-category">
				<h3>Satellite</h3>
				<div className="thumbnail-container">
					{Object.keys(satellite.mapas).map((item: any, index: number) => {
						return (
							<img 
								className="thumbnail"
								src={process.env.PUBLIC_URL + `/static/basemaps/satellite/${index + 1}.png`} 
								alt={`custom-${index + 1}`}
								onClick={() => setMapStyle(satellite.mapas[item])}
							/>
						)
					})}
				</div>
			</div>
			<div className="basemap-category">
				<h3>Light</h3>
				<div className="thumbnail-container">
					{Object.keys(light.mapas).map((item: any, index: number) => {
						return (
							<img 
								src={process.env.PUBLIC_URL + `/static/basemaps/light/${index + 1}.png`} 
								alt={`carto-${index + 1}`}
								className="thumbnail"
								onClick={() => setMapStyle(light.mapas[item])}
							/>
						)
					})}
				</div>
			</div>
			<div className="basemap-category">
				<h3>Dark</h3>
				<div className="thumbnail-container">
					{Object.keys(dark.mapas).map((item: any, index: number) => {
						return (
							<img 
								className="thumbnail"
								src={process.env.PUBLIC_URL + `/static/basemaps/dark/${index + 1}.png`} 
								alt={`mapbox-${index + 1}`}
								onClick={() => setMapStyle(dark.mapas[item])}
							/>
						)
					})}
				</div>
			</div>
			
			<div className="basemap-category">
				<h3>Color</h3>
				<div className="thumbnail-container">
					{Object.keys(color.mapas).map((item: any, index: number) => {
						return (
							<img 
								src={process.env.PUBLIC_URL + `/static/basemaps/color/${index + 1}.png`} 
								alt={`carto-${index + 1}`}
								className="thumbnail"
								onClick={() => setMapStyle(color.mapas[item])}
							/>
						)
					})}
				</div>
			</div>
			
			
		</div>
	)
}

Basemaps.displayName="Basemaps"