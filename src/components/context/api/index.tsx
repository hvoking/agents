import { GoogleApiProvider } from './google';
import { SurveyApiProvider } from './survey';
import { DataProvider } from './data';

export const ApiProvider = ({ children }: any) => {
	return (
		<SurveyApiProvider>
		<DataProvider>
		<GoogleApiProvider>
			{children}
		</GoogleApiProvider>
		</DataProvider>
		</SurveyApiProvider>
	)
}

ApiProvider.displayName="ApiProvider";