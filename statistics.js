function getStatistics(habits) {
  const total = habits.length;
  const completed = habits.filter(h => h.completed).length;
  return {
    total,
    completed,
    percentage: total > 0 ? (completed/total*100).toFixed(2) : 0
  };
}
