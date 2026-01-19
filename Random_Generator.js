
let button = document.getElementById("myButton");
let label = document.getElementById("myLabel");

button.onclick = function() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    label.textContent = randomNumber;
};