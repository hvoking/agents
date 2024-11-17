// Context imports
import { useCountriesData } from '../../../../../context/api/data/countries';

export const Ranking = () => {
	const { countriesData } = useCountriesData();
	
	if (!countriesData) return <></>

	const orderData = countriesData.sort((a: any, b: any) => b.count - a.count);

	return (
			<div style={{display: "grid", padding: "20px", alignSelf: "start"}}>
				<div className="ranking-title">Top Responders</div>
				{orderData.slice(0, 4).map((item: any, index: any) => {
					return (
						<div key={index} className="ranking-wrapper">
							<div style={{width: "20px"}}>{index + 1}. </div>
							<div>{item.name}</div>
						</div>
					)
				})}
			</div>
	)
}

Ranking.displayName="Ranking";