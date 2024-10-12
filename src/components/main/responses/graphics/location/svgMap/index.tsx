// App imports
import { SVGWrapper } from './svg';
import './styles.scss';

// Context imports
import { useWorldSizes } from '../../../../../context/sizes/world';
import { useLimitsData } from '../../../../../context/api/data/limits';
import { usePinsData } from '../../../../../context/api/data/pins';
import { useCountriesData } from '../../../../../context/api/data/countries';

// Third-party imports
import * as d3 from 'd3';

export const SvgMap = () => {
	const { limitsData } = useLimitsData();
	const { countriesData } = useCountriesData();
	const { innerWidth, innerHeight } = useWorldSizes();

	if (!limitsData || !countriesData) return <></>

	const projection: any = d3.geoMercator()
		.fitSize([ innerWidth, innerHeight ], limitsData)

	const path = d3.geoPath(projection);

	const maxCount: any = [0, d3.max(countriesData.map((d: any) => d.count))]

	const colorScale = d3.scaleLinear()
        .domain(maxCount)
        .range([0.1, 1]);

	return (
		<div className="world">
			<SVGWrapper>
				{countriesData.map((item: any, index: any) => {
					return (
						<path
							key={index}
							fill={`rgba(233, 12, 131, ${colorScale(item.count)})`}
							stroke={`rgba(233, 12, 131, 0.1)`}
							strokeWidth={0.4}
							d={`${path(item.geometry)}`}
						/>
					)
				})
			}
			</SVGWrapper>
		</div>
	)
}
SvgMap.displayName="SvgMap";