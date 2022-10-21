import { $, formatToTwoDecimals, scrollToElementById } from './functions/_functions.js'
import { calculatePMT } from './functions/calculatePMT.js'
import { calculateMortgagePayments } from './functions/calculateMortgagePayments.js'

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
  // const monthlyPaymentsElement = $('#monthly-overpayments')
  // const downPaymentElement = $('#down-payment')

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

    // It has || 0 so that if the field is left empty, it defaults to 0
    // const monthlyPayments = monthlyPaymentsElement.valueAsNumber || 0
    // const downPayment = downPaymentElement.valueAsNumber || 0

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

    // console.table(MORTGAGE_PAYMENTS)

    scrollToElementById('resultTitle')
  }) // form.submit
} // App
