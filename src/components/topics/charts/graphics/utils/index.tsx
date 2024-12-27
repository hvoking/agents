export const processData = (data: any[], name: string, colorLabel: string) => {
  if (!data) return { distribution: {}, colors: {} };

  return data.reduce(
    (acc: any, curr: any) => {
      const key = curr[name];
      if (key) {
        acc.distribution[key] = (acc.distribution[key] || 0) + 1;
        acc.colors[key] = curr[colorLabel];
      }
      return acc;
    },
    { distribution: {}, colors: {} }
  );
};