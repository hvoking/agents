import { GaugeSizesProvider } from './gauge';
import { BarsSizesProvider } from './bars';

export const SizesProvider = ({ children }: any) => {
	return (
		<GaugeSizesProvider>
		<BarsSizesProvider>
			{children}
		</BarsSizesProvider>
		</GaugeSizesProvider>
	)
}

SizesProvider.displayName="SizesProvider";