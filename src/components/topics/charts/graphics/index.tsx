// App imports
import { Gauge } from './gauge';
import { Legend } from './legend';
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

const sourceTypes = [
	{ id: 'lines', name: 'road_class', colorLabel: 'line-color' },
	{ id: 'points', name: 'property_type', colorLabel: 'circle-color' },
	{ id: 'polygons', name: 'class', colorLabel: 'fill-color' },
];

export const Graphics = ({ id }: any) => {
	const { sharedGeoJsonDataMap } = useMask();

	const getSourceData = (type: string) => sharedGeoJsonDataMap.value[`${type}-source-${id}`];

	return (
		<div className="chart-card">
			{sourceTypes.map(({ id: typeId, name, colorLabel }) => {
		        const data = getSourceData(typeId);
		        return (
					<div key={typeId} className="gauge">
						<Gauge data={data} name={name} colorLabel={colorLabel} />
						<Legend data={data} name={name} colorLabel={colorLabel} />
					</div>
		        );
		      })}
		</div>
	)
}

Graphics.displayName="Graphics";