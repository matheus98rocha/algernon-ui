export function createFallbackArray(): {
  id: number;
}[] {
  const fallbackItems = Array.from({ length: 3 }, (_, index) => ({
    id: index,
  }));

  return fallbackItems;
}
