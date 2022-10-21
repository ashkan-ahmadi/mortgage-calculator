export const $ = element => document.querySelector(element)

export const formatNumberToEuro = number => {
  return Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'EUR',
  }).format(number)
}
