import { GaugeSizesProvider } from './gauge';
import { BarsSizesProvider } from './bars';
import { DotsSizesProvider } from './dots';
import { LinesSizesProvider } from './lines';
import { RadiusSizesProvider } from './radius';
import { CircleSizesProvider } from './circle';

export const SizesProvider = ({ children }: any) => {
	return (
		<GaugeSizesProvider>
		<BarsSizesProvider>
		<DotsSizesProvider>
		<LinesSizesProvider>
		<CircleSizesProvider>
		<RadiusSizesProvider>
			{children}
		</RadiusSizesProvider>
		</CircleSizesProvider>
		</LinesSizesProvider>
		</DotsSizesProvider>
		</BarsSizesProvider>
		</GaugeSizesProvider>
	)
}

SizesProvider.displayName="SizesProvider";