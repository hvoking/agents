// App imports
import { SVGWrapper } from './svg';
import { Circle } from './circle';

// Context imports
import { useRaceSizes } from '../../../../context/sizes/gauge/race';

// Third party imports
import * as d3 from "d3";

export const Gauge = ({ data, name }: any) => {
	const { innerWidth, innerHeight } = useRaceSizes();
	const radius = d3.min([innerWidth, innerHeight]) / 2;

	let totalCircunference = 0;
	
	const strokeWidth = radius * 0.27;
	const innerRadius = radius - ( strokeWidth / 2 );

	const circumference = innerRadius * 2 * Math.PI;

	if (!data) return <></>

	const abilityDistribution = data.reduce((acc: any, curr: any) => {
	  if (curr[name]) {
	    acc[curr[name]] = (acc[curr[name]] || 0) + 1;
	  }
	  return acc;
	}, {});

	const sumOfValues = d3.sum(Object.values(abilityDistribution));

	const percentages = Object.keys(abilityDistribution).reduce((total: any,item: any) => {
		total[item] = abilityDistribution[item] / sumOfValues;
		return total
	}, {});

	return (
		<SVGWrapper>
			{Object.keys(percentages).map((item: any) => {
				const currentPercent = percentages[item] ? percentages[item] : 0
				const currentCircunference = Math.round(circumference * currentPercent)

				if (currentCircunference) {totalCircunference += currentCircunference}

				return (
					<g key={item}>
						{currentCircunference && 
							<Circle
								innerWidth={innerWidth}
								innerHeight={innerHeight}
								innerRadius={innerRadius}
								strokeWidth={strokeWidth}
								currentCircunference={currentCircunference}
								circumference={circumference}
								totalCircunference={totalCircunference}
								currentPercent={currentPercent}
							/>
						 }
					</g>
				)
			})}
		</SVGWrapper>
	)
}

Gauge.displayName="Gauge";