const min = 1
const max = 100
const random = Math.floor(Math.random()*(max-min+1))+min
console.log(random)
let attempts = 0
let guessing = 0
let results = true
while(results)
{
    guess = window.prompt(`Guess a number between ${min} - ${max}`)
    guess = Number(guess)
    console.log(typeof(guess),guess)
    if(isNaN(guess))
    {
        windows.alert(`Please enter a valid number`)
    }
    else if(guess < min || guess > max)
    {
        window.alert(`please enter a valid number`)
    }
    else
    {
        attempts++
        if (guess < results)
        {
            window.alert(`TOO Low, TRY AGAIN!`)
        }
        else if (guess > results)
        {
            window.alert(`TOO High, TRY AGAIN!`)
        }
         if (guess == results)
        {
            window.alert(`Correct Answer , The answer is ${results}, It tooks ${attempts} attempts to guess the correct answer`)
            results = false
        }
    }
}