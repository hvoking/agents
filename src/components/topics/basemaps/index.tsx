// App imports
import { listOfBaseMaps } from './options';
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';

export const Basemaps = () => {
	const { setMapStyle } = useGeo();

	const light: any = listOfBaseMaps[0];
	const satellite: any = listOfBaseMaps[1];
	const color: any = listOfBaseMaps[2];

	return (
		<div className="basemap-selector">
			<h2>Select Your Basemap</h2>
			<p className="instructions">
			  	Choose an basemap from the options below.
			  </p>
			<div className="thumbnail-container">
				{Object.keys(satellite.mapas).map((item: any, index: number) => {
					return (
						<div>
							<img 
								className="thumbnail"
								src={process.env.PUBLIC_URL + `/static/basemaps/satellite/${index + 1}.png`} 
								alt={`custom-${index + 1}`}
								onClick={() => setMapStyle(satellite.mapas[item])}
							/>
							<div>{item}</div>
						</div>
					)
				})}
			</div>
			<div className="thumbnail-container">
				{Object.keys(light.mapas).map((item: any, index: number) => {
					return (
						<div>
							<img 
								src={process.env.PUBLIC_URL + `/static/basemaps/light/${index + 1}.png`} 
								alt={`carto-${index + 1}`}
								className="thumbnail"
								onClick={() => setMapStyle(light.mapas[item])}
							/>
							<div>{item}</div>
						</div>
					)
				})}
			</div>
			<div className="thumbnail-container">
				{Object.keys(color.mapas).map((item: any, index: number) => {
					return (
						<div>
							<img 
								src={process.env.PUBLIC_URL + `/static/basemaps/color/${index + 1}.png`} 
								alt={`carto-${index + 1}`}
								className="thumbnail"
								onClick={() => setMapStyle(color.mapas[item])}
							/>
							<div>{item}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

Basemaps.displayName="Basemaps"