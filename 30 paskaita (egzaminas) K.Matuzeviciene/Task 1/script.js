/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById("submit-btn").addEventListener("click", display_result);

function convertPounds(number){
    return (number * 2.2046);
}
function convertGrams(number){
    return (number / 0.0010000);
}
function convertOunces(number){
    return (number * 35.274);
}

function display_result(){

let kilograms = document.getElementById("search").value;
let result1=convertPounds(kilograms);
let result2=convertGrams(kilograms);
let result3=convertOunces(kilograms);

document.getElementById("pounds").innerHTML="Pounds: " + result1.toFixed(2);
document.getElementById("grams").innerHTML="Grams: " + result2.toFixed(2);
document.getElementById("ounces").innerHTML="Ounces: " + result3.toFixed(2);
}

