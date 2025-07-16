export const processData = (data: any, name: any) => {
	const { distribution } = data.features.reduce((acc: any, curr: any) => {
		const key = curr[name];
		if (key) {
			acc.distribution[key] = (acc.distribution[key] || 0) + 1;
		}
		return acc;
	}, { distribution: {} });
	return distribution
};