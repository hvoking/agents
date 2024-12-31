// App imports
import { Gauge } from '../gauge';
import { Legend } from '../legend';
import { Dots } from '../dots';
import { Lines } from '../lines';
import { Bars } from '../bars';

export const Graphic = ({ distribution, colors, sumOfValues }: any) => {
	return (
		<>
			<Bars distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>
			{/*<Gauge distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>*/}
			{/*<Dots distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>*/}
			{/*<Lines distribution={distribution} colors={colors} sumOfValues={sumOfValues}/>*/}
			{/*<Legend distribution={distribution} colors={colors}/>*/}
		</>
	)
}

Graphic.displayName="Graphic";