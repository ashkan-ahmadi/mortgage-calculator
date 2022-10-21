import { $, formatToTwoDecimals, scrollToElementById } from './functions/_functions.js'
import { calculatePMT } from './functions/calculatePMT.js'
import { calculateMortgagePayments } from './functions/calculateMortgagePayments.js'
import { renderTable } from './functions/renderTable.js'

export const App = () => {
  // get the form
  const form = $('#calculate-mortgage-payment')

  // stop if the form is not found
  if (!form) return

  // getting all the DOM elements
  const mortgageLengthElement = $('#mortgage-length')
  const interestRateElement = $('#interest-rate')
  const amountElement = $('#amount')
  const paymentsPerYearElement = $('#paymentsPerYear')

  form.addEventListener('submit', e => {
    // stop the page from refreshing
    e.preventDefault()

    // getting the user input values
    const YEARS = mortgageLengthElement.valueAsNumber
    const ANNUAL_INTEREST_RATE = interestRateElement.valueAsNumber / 100
    const LOAN_AMOUNT = amountElement.valueAsNumber
    const PAYMENTS_PER_YEAR = Number(paymentsPerYearElement.value)
    const TOTAL_PERIODS = YEARS * PAYMENTS_PER_YEAR
    const INTEREST_RATE_PER_PERIOD = ANNUAL_INTEREST_RATE / PAYMENTS_PER_YEAR

    // calculate the PMT (how much to pay per interval)
    const PMT = formatToTwoDecimals(
      calculatePMT({
        LOAN_AMOUNT,
        TOTAL_PERIODS,
        INTEREST_RATE_PER_PERIOD,
      })
    )

    // calculate the mortgage payments per period
    const MORTGAGE_PAYMENTS = calculateMortgagePayments({
      LOAN_AMOUNT,
      ANNUAL_INTEREST_RATE,
      YEARS,
      PAYMENTS_PER_YEAR,
      TOTAL_PERIODS,
      PMT,
    })

    // render the table rows
    renderTable(MORTGAGE_PAYMENTS)

    // finally, scroll down to the result section
    scrollToElementById('resultTitle')
  })
}
