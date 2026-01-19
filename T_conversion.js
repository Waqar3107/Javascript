const textbox = document.getElementById("textbox");
const Fahrenheit = document.getElementById("Fahrenheit");
const Celsius = document.getElementById("Celsius");
const unit = document.getElementById("unit");

function convert(event) 
{
    event.preventDefault();
    let temp;

    if (Fahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        unit.textContent = `After conversion to Fahrenheit: ${temp} °F`;
    } 
    else if (Celsius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        unit.textContent = `After conversion to Celsius: ${temp.toFixed(2)} °C`;
    } 
    else {
        unit.textContent = `⚠️ Please select a unit`;
    }
}