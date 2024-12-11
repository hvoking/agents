import { GoogleApiProvider } from './google';
import { StylesApiProvider } from './styles';
import { IsochroneApiProvider } from './isochrone';

export const ApiProvider = ({ children }: any) => {
	return (
		<GoogleApiProvider>
		<StylesApiProvider>
		<IsochroneApiProvider>
			{children}
		</IsochroneApiProvider>
		</StylesApiProvider>
		</GoogleApiProvider>
	)
}

ApiProvider.displayName="ApiProvider";