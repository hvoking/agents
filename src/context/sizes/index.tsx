import { GaugeSizesProvider } from './gauge';
import { BarsSizesProvider } from './bars';
import { DotsSizesProvider } from './dots';
import { LinesSizesProvider } from './lines';
import { RadiusSizesProvider } from './radius';
import { CircleSizesProvider } from './circle';
import { SliderSizesProvider } from './slider';

export const SizesProvider = ({ children }: any) => {
	return (
		<GaugeSizesProvider>
		<BarsSizesProvider>
		<DotsSizesProvider>
		<LinesSizesProvider>
		<CircleSizesProvider>
		<RadiusSizesProvider>
		<SliderSizesProvider>
			{children}
		</SliderSizesProvider>
		</RadiusSizesProvider>
		</CircleSizesProvider>
		</LinesSizesProvider>
		</DotsSizesProvider>
		</BarsSizesProvider>
		</GaugeSizesProvider>
	)
}

SizesProvider.displayName="SizesProvider";