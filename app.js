function processInput() {
    var inputElement = document.getElementById("numberInput");
    var number = parseInt(inputElement.value);

    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "";

    if (isNaN(number)) {
        outputElement.innerHTML = "<span class='error'>Please enter a valid number.</span>";
        return;
    }

    if (number < 0) {
        outputElement.innerHTML = "<span class='error'>Please enter a positive value.</span>";
        return;
    }

    if (number % 2 === 0) {
        outputElement.innerHTML = "Next 3 even numbers: " + (number + 2) + ", " + (number + 4) + ", " + (number + 6);
    } else {
        outputElement.innerHTML = "Next 3 odd numbers: " + (number + 2) + ", " + (number + 4) + ", " + (number + 6);
    }
}