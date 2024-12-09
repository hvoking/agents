// App imports
import { listOfBaseMaps } from './options';

const Basemaps = () => {
	return (
		listOfBaseMaps.map((folder: any, index: number) => { 
			return (
				<div key={index} className="subTools">
					<div>{folder.provider}</div>
				</div>
			)
		})
	)
}

export default Basemaps;