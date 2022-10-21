import { formatToTwoDecimals } from './_functions.js'

export const calculateMortgagePayments = values => {
  /**
   * Calculates the mortgage payments per period
   *
   * @param {number} values.LOAN_AMOUNT - The total amount of loan borrowed
   * @param {number} values.ANNUAL_INTEREST_RATE - The annual interest rate
   * @param {number} values.PAYMENTS_PER_YEAR - The number of periods/payments per year
   * @param {number} values.TOTAL_PERIODS - The total number of periods/payments
   * @param {number} values.PMT - The amount to pay per period
   * @return {array} An array of objects
   */
  const { LOAN_AMOUNT, ANNUAL_INTEREST_RATE, PAYMENTS_PER_YEAR, TOTAL_PERIODS, PMT } = values

  // setting it to 0 for now. the formula will need to change later on
  const extraPayment = 0

  // will push the objects in here
  let mortgage = []

  // starting values
  let interest = 0
  let principal = 0
  let loan = LOAN_AMOUNT

  // calculates the interest, interest and principal of every payment period
  for (let i = 1; i <= TOTAL_PERIODS; i++) {
    loan = loan - principal - extraPayment
    interest = (loan * ANNUAL_INTEREST_RATE) / PAYMENTS_PER_YEAR
    principal = PMT - interest

    // push current period's values to the mortgage array
    mortgage.push({
      Period: i,
      PMT: formatToTwoDecimals(PMT),
      Interest: formatToTwoDecimals(interest),
      Principal: formatToTwoDecimals(principal),
      Loan: formatToTwoDecimals(loan),
    })
  }

  return mortgage
}
