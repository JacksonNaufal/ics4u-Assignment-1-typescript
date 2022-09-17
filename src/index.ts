/**
 * The program uses albert einstines e=mc^2
 *   and deal with numbers.
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-01-01
 */

import promptSync from 'prompt-sync'

const rock = 1
const paper = 2
const scissors = 3
const prompt = promptSync()
// let ageNumber: number

const userInput = prompt('Enter your choice, Rock, Paper or Scissors: ')
if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
  let randomNumber = Math.floor(Math.random() * 3) + 1
  let botPlayer = new String(randomNumber)
  if (randomNumber == 1) {
    botPlayer = 'rock'
  } else if (randomNumber == 2) {
    botPlayer = 'paper'
  } else {
    botPlayer = 'scissors'
  }

  if (botPlayer == userInput) {
    console.log('It was a tie!')
  } else if (
    (botPlayer == 'paper' && userInput == 'rock') ||
    (botPlayer == 'scissors' && userInput == 'paper') ||
    (botPlayer == 'rock' && userInput == 'scissors')
  ) {
    console.log('botPlayer wins!')
  } else if (
    (botPlayer == 'paper' && userInput == 'scissors') ||
    (botPlayer == 'scissors' && userInput == 'rock') ||
    (botPlayer == 'rock' && userInput == 'paper')
  ) {
    console.log('User wins!')
  }
  console.log(botPlayer)
} else {
  console.log('Invalid Input')
}
console.log('\nDone.')
