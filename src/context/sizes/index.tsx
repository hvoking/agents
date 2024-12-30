import { GaugeSizesProvider } from './gauge';
import { BarsSizesProvider } from './bars';
import { DotsSizesProvider } from './dots';

export const SizesProvider = ({ children }: any) => {
	return (
		<GaugeSizesProvider>
		<BarsSizesProvider>
		<DotsSizesProvider>
			{children}
		</DotsSizesProvider>
		</BarsSizesProvider>
		</GaugeSizesProvider>
	)
}

SizesProvider.displayName="SizesProvider";