import { $, formatNumber } from './_functions.js'

export const renderTable = data => {
  /**
   * Render the mortgage payments into the DOM as a table
   *
   * @param {number} data - The array of data
   * @return {undefined} This function doesn't return anything
   */

  // get the result section
  const resultSection = $('#resultSection')

  // clearing the data ready to be created again
  resultSection.innerHTML = ''

  // create the DOM elements
  resultSection.innerHTML = `
    <p>You will need to make <strong>${data.length}</strong> payments of <strong>${formatNumber(data[0].PMT)}</strong> €.</p>
    <table class="table table-hover text-center">
      <thead>
        <tr>
          <th scope="col">Payment Number</th>
          <th scope="col">Payment (€)</th>
          <th scope="col">Interest (€)</th>
          <th scope="col">Principal (€)</th>
          <th scope="col">Loan (€)</th>
        </tr>
      </thead>
      <tbody>
      
      ${data
        .map(
          item => `
        <tr>
          <td>${item.Period}</td>
          <td>${formatNumber(item.PMT)}</td>
          <td>${formatNumber(item.Interest)}</td>
          <td>${formatNumber(item.Principal)}</td>
          <td>${formatNumber(item.Loan)}</td>
        </tr>
      `
        )
        .join('')}
        
      <tfoot>
        <tr>
          <th scope="col">Payment Number</th>
          <th scope="col">Payment (€)</th>
          <th scope="col">Interest (€)</th>
          <th scope="col">Principal (€)</th>
          <th scope="col">Loan (€)</th>
        </tr>
      </tfoot>
    </tbody>
  </table>
  </section>
  `
}
