import { GoogleApiProvider } from './google';
import { StylesApiProvider } from './styles';
import { IsochroneApiProvider } from './isochrone';
import { BedrockApiProvider } from './bedrock';

export const ApiProvider = ({ children }: any) => {
	return (
		<GoogleApiProvider>
		<StylesApiProvider>
		<IsochroneApiProvider>
		<BedrockApiProvider>
			{children}
		</BedrockApiProvider>
		</IsochroneApiProvider>
		</StylesApiProvider>
		</GoogleApiProvider>
	)
}

ApiProvider.displayName="ApiProvider";