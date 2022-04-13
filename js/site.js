//input processing
function getString() {
    let message = document.getElementById("stringInput").value;

    if (message != "") {
        message = message.toLowerCase();
        let reversedString = reverseStringB(message);
        displayString(reversedString);
    } else {
        alert("Please input a valid string!");
    }
}

//View model
function displayString(message) {

    element = document.getElementById("results");
    let item = document.createElement("div");
    item.classList.add("resultsText");
    item.innerHTML = `Your input in reverse is: ${message}`;
    element.appendChild(item);

}

//algorithm using string concatenation
function reverseString(message) {
    let reversedString = "";

    for (i = message.length - 1; i >= 0; i--) {
        let char = message[i];
        //concatenante reversedString with the character from the index of message
        reversedString += char;
        //convert to lower caps
    }
    console.log(reversedString);
    console.log(message);
    return reversedString;
}

//algorithm using built in functions
function reverseStringB(message) {
    let reversedString = "";

    reversedStringArray = message.split("");
    reversedString = reversedStringArray.reverse().join("");
    return reversedString;
}