import { formatToTwoDecimals } from './_functions.js'

export const calculateMortgagePayments = values => {
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

    mortgage.push({
      Period: formatToTwoDecimals(i),
      PMT: formatToTwoDecimals(PMT),
      Interest: formatToTwoDecimals(interest),
      Principal: formatToTwoDecimals(principal),
      Loan: formatToTwoDecimals(loan),
    })
  }

  return mortgage
}
