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

export const scrollToElementById = (id, options = {}) => {
  //Finds y value of given object
  //https://stackoverflow.com/a/11986374

  /*
   * Scrolls the page to an element based on its id
   * @param id String the id of the element to scroll to
   * @return undefined
   */

  const defaultOptions = {
    topMargin: 10, // margin from the top of the viewport in pixels
  }

  const settings = { ...defaultOptions, ...options }

  const { topMargin } = settings

  const targetElement = document.getElementById(id)

  if (!targetElement) throw new Error(`No element with id ${id} was found.`)

  function findPos(obj) {
    let curtop = 0
    if (obj.offsetParent) {
      do {
        curtop += obj.offsetTop
      } while ((obj = obj.offsetParent))
      return [curtop] - topMargin
    }
  }

  window.scroll(0, findPos(targetElement))
}
