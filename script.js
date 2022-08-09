// Displays input menu when generate button is clicked.
var render = document.getElementById('generate');
render.onclick = function() {
    document.getElementById('inputBox').style.visibility = 'visible';
}

// Transcribes values selected by user.
var create = document.getElementById('begin');
create.onclick = function() {
    // Locally declared variables.
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialCharacters = "(<[{?!.*&%#$@;:,/~^+=-_}]>)";
    var numberChart = "0123456789";
    var characterType = "";
    var passwordElements = "";
    var passwordLength = document.getElementById('length-box').value;
    var finishedProduct = document.querySelector('#password');
    var selectedLength = document.querySelectorAll('input[type="checkbox"]:checked').length;
        
    // Start of password value selection.
    if (passwordLength >= 8 && passwordLength < 128) {
        document.getElementById('inputBox').style.visibility = 'hidden';

        // Whether to include lowercase letters.
        if (document.getElementById('lowercase').checked) {
            characterType += lowerCase;
            passwordElements += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        }

        // Whether to include uppercase letters.
        if (document.getElementById('uppercase').checked) {
            characterType += upperCase;
            passwordElements += upperCase[Math.floor(Math.random() * upperCase.length)];
        }

        // Whether to include special characters.
        if (document.getElementById('specials').checked) {
            characterType += specialCharacters;
            passwordElements += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        }

        // Whether to include numbers.
        if (document.getElementById('numbers').checked) {
            characterType += numberChart;
            passwordElements += numberChart[Math.floor(Math.random() * numberChart.length)];
        }

        // Takes all values selected and randomizes then sends the remaining value to the 'password' field.
        for (var i = 0; i < passwordLength - selectedLength; i++) {
            passwordElements += characterType.charAt(Math.floor(Math.random() * characterType.length));
            finishedProduct.value = passwordElements;
        }

        // Obfuscates error prompt when the for portion of the above boolean runs properly.
        document.getElementById('errorPrompt').style.visibility = 'hidden';

    } else {
        // Displays error message when invalid entry is input.
        document.getElementById('errorPrompt').style.visibility = 'visible';
    }
}