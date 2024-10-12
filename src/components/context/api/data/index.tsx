import { SurveyDataProvider } from './survey';
import { PinsDataProvider } from './pins';
import { LimitsDataProvider } from './limits';
import { CountriesDataProvider } from './countries';

export const DataProvider = ({ children }: any) => {
	return (
		<LimitsDataProvider>
		<CountriesDataProvider>
		<SurveyDataProvider>
		<PinsDataProvider>
			{children}
		</PinsDataProvider>
		</SurveyDataProvider>
		</CountriesDataProvider>
		</LimitsDataProvider>
	)
}

DataProvider.displayName="DataProvider";