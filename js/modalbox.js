/**
 * Modal box JavaScript
 * @Version 1.0
 * @Author: Cristian Marian
 * @E-mail: dev.cristian99@gmail.com
 */

//Get Open Button
var open = document.getElementById('open-modal');

//Get Close Button 
var close = document.getElementById('close-modal');

//Get Modal Contend
var content = document.getElementById('modal-box');

//Get Modal Target (Ex: data-target="modal-name")
var element = document.getElementById('open-modal').getAttribute('data-target');

//Set Modal Name
var modal = document.getElementById(element);

//Check Settings
if (!animationDuration) {
    var animationDuration = "0.5s"; //Defaut
}
if (openAnimation === true) {
    var openAnimation = "open-modal-animation";
}
if (openAnimation === false) {
    var openAnimation = null;
}else{
    var openAnimation = "open-modal-animation";
} 

//Open Modal
open.onclick = function() {
    modal.style.display = "block";
    content.style.animation = openAnimation;
    content.style.animationDuration = animationDuration;
}

//Close Modal
close.onclick = function() {
    modal.style.display = "none";
} 

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
