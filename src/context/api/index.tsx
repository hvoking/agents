import { GoogleApiProvider } from './google';
import { StylesApiProvider } from './styles';
import { IsochroneApiProvider } from './isochrone';
import { RagApiProvider } from './rag';

export const ApiProvider = ({ children }: any) => {
	return (
		<GoogleApiProvider>
		<StylesApiProvider>
		<IsochroneApiProvider>
		<RagApiProvider>
			{children}
		</RagApiProvider>
		</IsochroneApiProvider>
		</StylesApiProvider>
		</GoogleApiProvider>
	)
}

ApiProvider.displayName="ApiProvider";