// App imports
import { Gauge } from './gauge';
import { Dots } from './dots';
import { Lines } from './lines';
import { Bars } from './bars';
import { processData } from './data';

// Third-party imports
import * as d3 from 'd3';

export const Graphic = ({ data, name, colorLabel, title, graphicType }: any) => {
	const { distribution, colors } = processData(data, name, colorLabel);
	const sumOfValues = d3.sum(Object.values(distribution));

	return (
		<div className="chart-wrapper">
	        <div className="chart-title">{title}</div>
			<div style={{display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "start"}}>
				<Bars distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>
				{graphicType === "gauge" && <Gauge distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>}
				{graphicType === "dots" && <Dots distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>}
				{graphicType === "lines" && <Lines distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>}
			</div>
		</div>
	)
}

Graphic.displayName="Graphic";