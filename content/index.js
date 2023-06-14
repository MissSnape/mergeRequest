import {
  renderStartPage,
  renderEasyPage,
  renderMediumPage,
  renderHardPage,
} from "./render.js";
const contentElement=document.getElementById("box");


renderStartPage({ contentElement });

let startButton = document.getElementById('start-button');

startButton.addEventListener('click',() => {
let buttonOneLevel = document.getElementById('one');
let buttonTwoLevel = document.getElementById('two');
let buttonThreeLevel = document.getElementById('three');

    if (buttonOneLevel.checked) {
       renderEasyPage({contentElement});
        
    }
    
    if (buttonTwoLevel.checked) {
        renderMediumPage({contentElement});
         
     }
     if (buttonThreeLevel.checked) {
        renderHardPage({contentElement});
         
     }
})

