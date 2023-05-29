function renderStartPage({contentElement}){

    let startPageHtml = `
    <div class="play">
    <div><h3 class='choice-text'>Выбери сложность</h3></div>
    <div class="level">
        <div class="level-block">
            <input type="radio" class="level-block-text" name="radios" value="1" id="one">1</input></div>
        <div class="level-block">
            <input type="radio" class="level-block-text" name="radios" value="1" id="two">2</input></div>
            <div class="level-block">
                <input type="radio" class="level-block-text" name="radios" value="1" id="three">3</input></div>
            </div>
            <div>
                <button class='start-button' id="start-button" type="submit">Старт</button>
            </div>
        </div>`
    contentElement.innerHTML = startPageHtml;
   
}
     function renderEasyPage({contentElement}){
        let easyPageContent =`<div class = "level_page">
                                <h1>Страница с легким уровнем</h1>
                            </div>`;
            contentElement.innerHTML = easyPageContent;        
    }
    function renderMediumPage({contentElement}){
        let mediumPageContent =`<div class = "level_page">
                                <h1>Страница о средним уровнем</h1>
                            </div>`;
            contentElement.innerHTML = mediumPageContent;        
    }
    function renderHardPage({contentElement}){
        let hardPageContent =`<div class = "level_page">
                                <h1>Страница с тяжелым уровнем</h1>
                            </div>`;
            contentElement.innerHTML = hardPageContent;        
    }

//renderStartPage ({contentElement});

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
