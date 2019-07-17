const dollarAmount = 3.76

let dollarAmountTimes100 = dollarAmount * 100




const numberOfQuarters = Math.floor(dollarAmountTimes100 / 25)
dollarAmountTimes100 -= (numberOfQuarters * 25)

const numberOfDimes = Math.floor(dollarAmountTimes100 / 10)
dollarAmountTimes100 -= (numberOfDimes * 10)

const numberOfNickels = Math.floor(dollarAmountTimes100 / 5)
dollarAmountTimes100 -= (numberOfNickels * 5)

const numberOfPennies = Math.floor(dollarAmountTimes100)



const piggyBank = {
    quarters: numberOfQuarters,
    nickels: numberOfNickels,
    dimes: numberOfDimes,
    pennies: numberOfPennies
}

console.log(piggyBank)



