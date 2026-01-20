function Roll() {
    const numOfDice = document.getElementById("number").value;
    const DiceResult = document.getElementById("DiceResult");
    const DiceImages = document.getElementById("DiceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="${value}.png" alt="Dice ${value}">`);
    }
    DiceResult.textContent = `Dice: ${values.join(", ")}`;
    DiceImages.innerHTML = images.join("");
}