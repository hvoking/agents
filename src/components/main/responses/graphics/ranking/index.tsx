// App imports
import './styles.scss';

// Third-party imports
import * as d3 from "d3";

export const Ranking = ({ data, name }: any) => {
	if (!data) return <></>
		
	const currentDistribution = data.reduce((acc: any, curr: any) => {
	  if (curr[name]) {
	    acc[curr[name]] = (acc[curr[name]] || 0) + 1;
	  }
	  return acc;
	}, {});

	const sortedDistribution = Object.entries(currentDistribution).sort(([, a]: any, [, b]: any) => b - a);

	return (
			<div style={{display: "grid", padding: "20px", alignSelf: "start"}}>
				<div className="ranking-title">Top Responders</div>
				{sortedDistribution.slice(0, 4).map((item: any, index: any) => {
					return (
						<div key={item} className="ranking-wrapper">
							<div style={{width: "20px"}}>{index + 1}. </div>
							<div>{item[0].toLowerCase()}</div>
						</div>
					)
				})}
			</div>
	)
}

Ranking.displayName="Ranking";