// App imports
import './styles.scss';

// Third-party imports
import * as d3 from "d3";

export const Bars = ({ data, title, name, styleName }: any) => {
	if (!data) return <></>
		
	const currentDistribution = data.reduce((acc: any, curr: any) => {
	  if (curr[name]) {
	    acc[curr[name]] = (acc[curr[name]] || 0) + 1;
	  }
	  return acc;
	}, {});

	const sumOfValues = d3.sum(Object.values(currentDistribution));

	return (
		<div className={styleName}>
			<div className="graphics-title">
				{title}
			</div>
			<div style={{display: "grid", gridGap: "20px", padding: "20px"}}>
				{Object.keys(currentDistribution).slice(0, 3).map((item: any) => {
					const currentPercent = currentDistribution[item] / sumOfValues;

					return (
						<div key={item} className="bars-wrapper">
							<div>{item.toLowerCase()}</div>
							<div className="bars">
								<div 
									style={{
										width: `${currentPercent * 100}%` , 
										backgroundColor: `rgba(233, 12, 131, ${currentPercent})`
									}}
								></div>
								<div>{currentDistribution[item]}</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

Bars.displayName="Bars";