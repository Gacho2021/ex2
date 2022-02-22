//made function to disable out the MPG box
window.onload = function(){
document.getElementById("MPG").disabled = true;
}
//Assigned the submit button a variable
var Submit = document.getElementById("Submit")

//attached the event listener to the submit button and coded the "annonymous" function.
Submit.addEventListener("click", function() {
let Miles = document.getElementById("Miles").value
let Gas = document.getElementById("Gas").value
Miles = parseInt(Miles)
Gas = parseInt(Gas)
let MPG = Miles / Gas
document.getElementById("MPG").value = MPG
}, false);

