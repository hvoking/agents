// Third-party imports
import * as d3 from "d3";

export const Legend = ({ data, name, colorLabel }: any) => {
	if (!data) return <></>
		
	const currentDistribution = data.reduce((acc: any, curr: any) => {
	  if (curr[name]) {
	    acc[curr[name]] = (acc[curr[name]] || 0) + 1;
	  }
	  return acc;
	}, {});

	const colors = data.reduce((acc: any, curr: any) => {
	  if (curr[name]) {
	    acc[curr[name]] = curr[colorLabel]
	  }
	  return acc;
	}, {});

	const sortedDistribution = Object.entries(currentDistribution).sort(([, a]: any, [, b]: any) => b - a);
	const sumOfValues = d3.sum(Object.values(currentDistribution));

	return (
		<div style={{display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-between"}}>
			{sortedDistribution.map((item: any) => {
				const currentPercent = currentDistribution[item[0]] / sumOfValues;
				const currentColor = colors[item[0]];

				return (
					<div 
						key={item} 
						style={{
							display: "flex", 
							gap: "5px", 
							whiteSpace: "nowrap"
						}}
					>
						<div 
							style={{
								width: "10px", 
								height: "10px", 
								backgroundColor: currentColor
							}}
							></div>
						<div style={{fontSize: "0.6em"}}>{item[0]}</div>
					</div>
				)
			})}
		</div>
	)
}

Legend.displayName="Legend";