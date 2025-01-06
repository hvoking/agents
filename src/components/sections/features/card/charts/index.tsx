// App imports
import { Gauge } from './gauge';
import { Dots } from './dots';
import { Lines } from './lines';
import { Bars } from './bars';
import { processData } from './data';
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

export const Charts = ({ data, name, colorLabel, graphicType, backgroundColor }: any) => {
	const { distribution, colors } = processData(data, name, colorLabel);
	const sumOfValues = d3.sum(Object.values(distribution));

	return (
		<div style={{display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "start", backgroundColor: backgroundColor}}>
			<Bars distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>
			{graphicType === "gauge" && <Gauge distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>}
			{graphicType === "dots" && <Dots distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>}
			{graphicType === "lines" && <Lines distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>}
		</div>
	)
}

Charts.displayName="Charts";