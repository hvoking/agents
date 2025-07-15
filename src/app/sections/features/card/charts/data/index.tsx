export const processData = (data: any, name: any, colorLabel: any) => {
	const { distribution, colors } = data.reduce((acc: any, curr: any) => {
		const key = curr[name];
		if (key) {
			acc.distribution[key] = (acc.distribution[key] || 0) + 1;
			acc.colors[key] = curr[colorLabel];
		}
		return acc;
	}, { distribution: {}, colors: {} });

	const sortedEntries = Object.entries(distribution)
	    .sort(([, a]: any, [, b]: any) => b - a)
	    .slice(0, 3);

	return sortedEntries.reduce((acc: any, [key, value]: any) => {
		acc.distribution[key] = value;
		acc.colors[key] = colors[key];
		return acc;
	}, { distribution: {}, colors: {} });
};