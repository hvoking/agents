// App imports
import { Gauge } from './gauge';
import { Legend } from './legend';
import { Dots } from './dots';
import { Lines } from './lines';
import { Bars } from './bars';
import { processData } from './data';

// Third-party imports
import * as d3 from 'd3';

export const Graphic = ({ data, name, colorLabel, title }: any) => {
	const { distribution, colors } = processData(data, name, colorLabel);
	const sumOfValues = d3.sum(Object.values(distribution));

	return (
		<div className="chart-wrapper">
	        <div className="chart-title">{title}</div>
			<Bars distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>
			{/*<Gauge distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>*/}
			{/*<Dots distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>*/}
			{/*<Lines distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>*/}
			{/*<Legend distribution={distribution} colors={colors}/>*/}
		</div>
	)
}

Graphic.displayName="Graphic";