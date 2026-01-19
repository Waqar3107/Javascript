/*console.log("Hello")
console.log("I like Pizza")
window.alert("This is an alert")
document.getElementById("MH1").textContent = "Hello World"
let x ;
x = 100;
console.log(x)

let food = "burger";
console.log(`your favourite food is ${food}`)
let firstName = "waqar"
console.log(`your name is ${firstName}`)

let fullName = "Muhammad Waqar"
let age = 25
let isStudent = true

document.getElementById("MP").textContent = `You name is ${firstName}`
document.getElementById("P2").textContent = `Your age is ${age}`
document.getElementById("P3").textContent = `Is a Student ${isStudent}`


// arithmetic operators 
let students = 35
students = students + 1
students = students - 1
students = students / 1
students = students * 1
students = students ** 1
console.log(students)

let result = 1 + 2 * 3 + 4 ** 3
console.log(result)
document.getElementById("P4").textContent = `multiple operations result is ${result}`


// window input 
let username 
username = window.prompt(`What is your username ?`)
console.log(username)
document.getElementById("P5").textContent = `your username is ${username}`

// button
document.getElementById("Submit").onclick = function()
{
    username = document.getElementById("text").value
    console.log(username)
    document.getElementById("MH1").textContent =`Hello ${username}`
}*/
let increase = document.getElementById("Increase")
let Decrease = document.getElementById("Decrease")
let Reset = document.getElementById("Reset")
let Counter = document.getElementById("Counter")
let count = 0
Increase.onclick = function()
{
    count++
    Counter.textContent = count
}
Decrease.onclick = function ()
{
    count--
    Counter.textContent = count
}
Reset.onclick = function ()
{
    count = 0
    Counter.textContent = 0
}