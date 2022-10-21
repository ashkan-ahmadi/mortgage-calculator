export const calculateMortgagePayments = values => {
  const { PMT, PERIODS, ANNUAL_RATE, PRINCIPAL_LOAN } = values

  // setting default as 0. They will be calculated in the for loop
  let interestPerPeriod = 0
  let principalPerPeriod = 0

  // default is the same but it changes for every period
  let loanPerPeriod = PRINCIPAL_LOAN
  let extraPayment = 0

  // we will push all the values into this object
  let mortgagePayments = {
    payments: [],
    totals: {
      totalPaymentOutOfPocket: Number((PMT * PERIODS).toFixed(2)),
      totalInterest: Number((PMT * PERIODS - PRINCIPAL_LOAN).toFixed(2)),
      PMT: PMT,
    },
  }

  // calculate the 3 different values here
  for (let i = 1; i <= PERIODS; i++) {
    loanPerPeriod = loanPerPeriod - principalPerPeriod - extraPayment
    interestPerPeriod = (loanPerPeriod * ANNUAL_RATE) / PERIODS
    principalPerPeriod = PMT - interestPerPeriod

    // push the numbers of every period into the mortgagePayments.payments array
    mortgagePayments.payments.push({
      period: i,
      PMT: PMT,
      interest: Number(interestPerPeriod.toFixed(2)),
      principal: Math.abs(principalPerPeriod.toFixed(2)),
      loan: Number(loanPerPeriod.toFixed(2)),
    })
  }

  return mortgagePayments
}
