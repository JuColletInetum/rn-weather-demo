const BASE_SIZE = 16;

const multiplier = [
  0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 5, 6, 8, 10,
] as const;

export const size = multiplier.reduce(
  (acc, curr) => ({...acc, [curr]: curr * BASE_SIZE}),
  {} as Record<(typeof multiplier)[number], number>,
);
