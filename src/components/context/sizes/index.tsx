import { SliderSizesProvider } from './slider';
import { WorldSizesProvider } from './world';
import { GaugeSizesProvider } from './gauge';

export const SizesProvider = ({ children }: any) => {
	return (
		<SliderSizesProvider>
		<WorldSizesProvider>
		<GaugeSizesProvider>
			{children}
		</GaugeSizesProvider>
		</WorldSizesProvider>
		</SliderSizesProvider>
	)
}

SizesProvider.displayName="SizesProvider";