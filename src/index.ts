/**
 * The program uses albert einstines e=mc^2
 *   and deal with numbers.
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-01-01
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
// let ageNumber: number

const userInput = prompt('Enter your choice, Rock, Paper or Scissors: ')
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  let botPlayer = String(randomNumber)
  if (randomNumber === 1) {
    botPlayer = 'rock'
  } else if (randomNumber === 2) {
    botPlayer = 'paper'
  } else {
    botPlayer = 'scissors'
  }

  if (botPlayer === userInput) {
    console.log(`It was a tie! ${botPlayer} equals ${userInput}!`)
  } else if (
    (botPlayer === 'paper' && userInput === 'rock') ||
    (botPlayer === 'scissors' && userInput === 'paper') ||
    (botPlayer === 'rock' && userInput === 'scissors')
  ) {
    console.log(`botPlayer wins! ${botPlayer} beats ${userInput}!`)
  } else if (
    (botPlayer === 'paper' && userInput === 'scissors') ||
    (botPlayer === 'scissors' && userInput === 'rock') ||
    (botPlayer === 'rock' && userInput === 'paper')
  ) {
    console.log(`User wins! ${userInput} beats ${botPlayer}!`)
  }
} else {
  console.log('Invalid Input')
}
console.log('\nDone.')
