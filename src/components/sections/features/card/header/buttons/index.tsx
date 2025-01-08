// App imports
import { Filter } from './filter';
import { CancelCross } from './cross';
import { Arrow } from './arrow';

export const Buttons = ({ marker, activeCharts, setActiveCharts }: any) => {
	return (
		<div className="header-buttons">
			<Filter marker={marker}/>
			<Arrow activeCharts={activeCharts} setActiveCharts={setActiveCharts}/>
			<CancelCross marker={marker}/>
		</div>
	)
}

Buttons.displayName="Buttons";