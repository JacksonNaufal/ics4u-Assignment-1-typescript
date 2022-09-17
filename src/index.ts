/**
 * The program uses albert einstines e=mc^2
 *   and deal with numbers.
 * By:      Jackson Naufali
 * Version: 1.0
 * Since:   2020-01-01
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
const albert = 298800000
// let ageNumber: number

const ageString = prompt('Enter your mass!(Kg): ')
const massNumber = parseFloat(ageString)
if (massNumber > 0) {
  const overallMass = massNumber * Math.pow(albert, 2)
  console.log(`Amount of Energy is (J)>  ${overallMass}J!`)
} else {
  console.log('Invalid Input')
}
console.log('\nDone.')
