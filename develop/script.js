//
var render = document.getElementById('generate');
render.onclick = function() {
    document.getElementById('inputBox').style.visibility = 'visible';
    document.getElementById('inputBox').empty();
}

//
var create = document.getElementById('begin');
create.onclick = function() {
    //
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialCharacters = "(<[{?!.*&%#$@;:,/~^+=-_}]>)";
    var numberChart = "0123456789";
    var characterType = "";
    var passwordElements = "";
    var passwordLength = document.getElementById('length').value;
    var finishedProduct = document.querySelector('#passwordElements');
    var selectedLength = document.querySelectorAll('input[type="checkbox"]:checked').length;

    //
    if (passwordLength >= 8 && passwordLength < 128) {
        document.getElementById('inputBox').style.visibility = 'hidden';

        //
        if (document.getElementById('lowercase').checked) {
            characterType += lowerCase;

            passwordElements += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        }

        //
        if (document.getElementById('uppercase').checked) {
            characterType += upperCase;
            
            passwordElements += upperCase[Math.floor(Math.random() * upperCase.length)];
        }

        //
        if (document.getElementById('special-characters').checked) {
            characterType += specialCharacters;

            passwordElements += specialCharacters;[Math.floor(Math.random() * specialCharacters.length)];
        }

        //
        if (document.getElementById('number-selector').checked) {
            characterType += numberChart;

            passwordElements += numberChart[Math.floor(Math.random() * numberChart.length)];
        }

        //
        for (var i = 0; i < passwordLength - selectedLength; i++) {

            passwordElements += characterType.charAt(Math.floor(Math.random() * characterType.length));

            finishedProduct.value = passwordElements;
        }

        //
        document.getElementById('errorPrompt').style.visibility = 'hidden';

    } else {
        //
        document.getElementById('errorPrompt').style.visibility = 'visible';
    }
}