import { GoogleApiProvider } from './google';
import { StylesApiProvider } from './styles';

export const ApiProvider = ({ children }: any) => {
	return (
		<GoogleApiProvider>
		<StylesApiProvider>
			{children}
		</StylesApiProvider>
		</GoogleApiProvider>
	)
}

ApiProvider.displayName="ApiProvider";