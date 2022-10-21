export const calculatePMT = values => {
  /**
   * Calculates the monthly payment amount of a loan
   *
   * @source https://www.mymove.com/mortgage/mortgage-calculation/
   * @param {number} values.LOAN_AMOUNT - The total amount of loan borrowed
   * @param {number} values.TOTAL_PERIODS - The total number of periods/payments
   * @param {number} values.INTEREST_RATE_PER_PERIOD - The interest rate per period/payment
   * @return {number} amount to pay per period
   */

  const { LOAN_AMOUNT, TOTAL_PERIODS, INTEREST_RATE_PER_PERIOD } = values

  // formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
  // in JS, you must use ** instead of ^

  const top = LOAN_AMOUNT * (INTEREST_RATE_PER_PERIOD * (1 + INTEREST_RATE_PER_PERIOD) ** TOTAL_PERIODS)
  const bottom = (1 + INTEREST_RATE_PER_PERIOD) ** TOTAL_PERIODS - 1
  return top / bottom
}
