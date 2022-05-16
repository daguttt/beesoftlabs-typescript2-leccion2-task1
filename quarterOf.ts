// function quarterOf(month: number): number {
//   if (month <= 3) return 1
//   if (month > 3 && month <= 6) return 2
//   if (month > 6 && month <= 9) return 3
//   return 4
// }

const MONTHS_IN_A_QUARTER = 3
const quarterOf = (month: number) => Math.ceil(month / MONTHS_IN_A_QUARTER)