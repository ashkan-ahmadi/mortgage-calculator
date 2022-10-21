export const $ = element => document.querySelector(element)

export const formatNumberToEuro = number => {
  return Number(
    Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'EUR',
    }).format(number)
  )
}

export const formatToTwoDecimals = number => {
  // https://www.jacklmoore.com/notes/rounding-in-javascript/
  return Number(Math.round(number + 'e2') + 'e-2')
}
