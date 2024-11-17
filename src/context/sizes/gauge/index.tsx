import { RaceSizesProvider } from './race';

export const GaugeSizesProvider = ({ children }: any) => {
	return (
		<RaceSizesProvider>
			{children}
		</RaceSizesProvider>
	)
}

GaugeSizesProvider.displayName="GaugeSizesProvider";