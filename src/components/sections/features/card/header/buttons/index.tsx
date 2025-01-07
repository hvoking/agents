// App imports
import { Filters } from './filters';
import { CancelCross } from './cross';
import { Arrow } from './arrow';

export const Buttons = ({ marker, activeCharts, setActiveCharts }: any) => {
	return (
		<div className="header-buttons">
			<Filters marker={marker}/>
			<Arrow activeCharts={activeCharts} setActiveCharts={setActiveCharts}/>
			<CancelCross marker={marker}/>
		</div>
	)
}

Buttons.displayName="Buttons";