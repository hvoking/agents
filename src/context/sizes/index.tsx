import { GaugeSizesProvider } from './gauge';
import { BarsSizesProvider } from './bars';
import { DotsSizesProvider } from './dots';
import { LinesSizesProvider } from './lines';

export const SizesProvider = ({ children }: any) => {
	return (
		<GaugeSizesProvider>
		<BarsSizesProvider>
		<DotsSizesProvider>
		<LinesSizesProvider>
			{children}
		</LinesSizesProvider>
		</DotsSizesProvider>
		</BarsSizesProvider>
		</GaugeSizesProvider>
	)
}

SizesProvider.displayName="SizesProvider";