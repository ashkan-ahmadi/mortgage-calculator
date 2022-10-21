export const calculatePMT = values => {
  /**
   * Calculates the monthly payment amount of a loan
   *
   * @source https://www.mymove.com/mortgage/mortgage-calculation/
   * @param {number} totalLoan - The total amount of loan borrowed
   * @param {number} annualInterestRate - The annual interest rate (in %)
   * @param {number} totalPeriodYears - The number of years it takes to pay the loan + interest back
   * @param {number} periodPerYear - The number of payments to make in one year
   * @return {number} amount to pay per period
   */

  const { totalLoan, annualInterestRate, totalPeriodYears, periodPerYear } = values

  // divide by 100 to get the true value (e.g. 5% = 0.05)
  annualInterestRate = annualInterestRate / 100

  // how many payments to make
  const totalPeriods = totalPeriodYears * periodPerYear

  // how much interest to pay per each payment
  const interestRatePerPeriod = annualInterestRate / periodPerYear

  // formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
  // in JS, you must use ** instead of ^

  const top = totalLoan * (interestRatePerPeriod * (1 + interestRatePerPeriod) ** totalPeriods)
  const bottom = (1 + interestRatePerPeriod) ** totalPeriods - 1
  return top / bottom
}
