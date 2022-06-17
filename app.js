console.log("JS file called")

// Your function(s) should go here that will interact with the webpage or DOM
let randomNumber = () => {
    return Math.floor(Math.random() * 101)
}

let number = randomNumber()

const getUserInput = (evt) => {
    evt.preventDefault();
    let userInput = evt.target.elements[0]
    let guess = parseInt(userInput.value)
    if(guess === number) {
        alert(`You guessed right, number was ${number}`)
    } else if(guess < number) {
        alert("Guess Higher!")
    } else if(guess > number) {
        alert("Guess Lower!")
    } else {
        alert("Please enter valid number.")
    }    
}

