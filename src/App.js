import { $ } from './functions/_functions'
import { calculatePMT } from './functions/calculatePMT'
import { calculateMortgagePayments } from './functions/calculateMortgagePayments'

export const App = () => {
  // get the form
  const form = $('#calculate-mortgage-payment')

  // stop if the form is not found
  if (!form) return

  // getting all the DOM elements
  const mortgageLengthElement = $('#mortgage-length')
  const interestRateElement = $('#interest-rate')
  const amountElement = $('#amount')
  const monthlyPaymentsElement = $('#monthly-overpayments')
  const paymentsPerYearElement = $('#paymentsPerYear')
  const downPaymentElement = $('#down-payment')

  form.addEventListener('submit', e => {
    // stop the page from refreshing
    e.preventDefault()

    // getting the user input values
    const mortgageLength = mortgageLengthElement.valueAsNumber
    const interestRate = interestRateElement.valueAsNumber / 100
    const amount = amountElement.valueAsNumber
    // const paymentsPerYear = Number(paymentsPerYearElement.value);
    const paymentsPerYear = 12

    // It has || 0 so that if the field is left empty, it defaults to 0
    const monthlyPayments = monthlyPaymentsElement.valueAsNumber || 0
    const downPayment = downPaymentElement.valueAsNumber || 0

    // calculate the PMT (how much to pay per interval)
    const PMT = calculatePMT({
      totalLoan: amount,
      annualInterestRate: interestRate,
      totalPeriodYears: mortgageLength,
      periodPerYear: paymentsPerYear,
    })

    const MORTGAGE_PAYMENTS = calculateMortgagePayments({
      PMT: PMT,
      PERIODS: paymentsPerYear,
      ANNUAL_RATE: interestRate,
      PRINCIPAL_LOAN: amount,
    })

    console.log(PMT)
  }) // form.submit
} // App
