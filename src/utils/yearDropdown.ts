
export const getYears = (pastYear: number, futureYear: number): number[] => {
  const currentYear = new Date().getFullYear();

  return Array.from(
    { length: pastYear + futureYear + 1 },
    (_, index) => currentYear - pastYear + index
  )
} 
