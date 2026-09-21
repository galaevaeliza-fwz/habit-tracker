function validateHabit(name) {
  if (!name || name.length < 3) {
    throw new Error('Habit name must be at least 3 characters');
  }
  return true;
}
