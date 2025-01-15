export const summarizeDataset = (data: any[]) => {
  const summary = data.reduce((acc: any, row: any) => {
    Object.entries(row).map(([key, value]: any) => {
      if (!acc[key]) {
        acc[key] = { totalCount: 0, uniqueCount: 0, distribution: {} };
      }

      acc[key].totalCount += 1;
      acc[key].distribution[value] = (acc[key].distribution[value] || 0) + 1;
    })
    return acc;
  }, {});

  // Calculate unique counts for each column
  for (const key in summary) {
    summary[key].uniqueCount = Object.keys(summary[key].distribution).length;
  }

  return summary;
};