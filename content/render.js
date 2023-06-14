export function renderStartPage({ contentElement }) {
  let startPageHtml = `<div class="box " id="box">
  <div><h3 class='choice-text'>Выбери сложность</h3></div>
  <div class="play">
      <div class="level-block">
         <input type="radio" class="level-block-text" name="radios"  id="one"></input>
         <label for="one">1</label>
         </div>
         
         <div class="level-block">
          <input type="radio" class="level-block-text" name="radios"  id="two"></input>
          <label for="two">2</label>
          </div>
         
          <div class="level-block">
              <input type="radio" class="level-block-text" name="radios" id="three"></input>
              <label for="three">3</label>
              </div>
              
              </div>
              <button class='start-button' id="start-button" type="submit">Старт</button>
          </div>
      `;
  contentElement.innerHTML = startPageHtml;
  
}

export function renderEasyPage({ contentElement }) {
  let easyPageContent = `<div class = "level-page center">
  <div class = "level-page-heading center">
    <div class="time-game">
    <div class="min-sek">
        <p>min</p>
        <p>sek</p>
    </div>

<h2 class="time">00.00</h2>
</div>
<button class ="button-start">Начать заново</button>
 </div>
 <div class="cards">
    <img src="./cards/туз пики.svg" alt="">
    <img src="./cards/туз бубны.svg" alt="">
    <img src="./cards/туз крести.svg" alt="">
    <img src="./cards/туз черви.svg" alt="">
 </div>
                        </div>`;
  contentElement.innerHTML = easyPageContent;
}

export function renderMediumPage({ contentElement }) {
  let mediumPageContent = `<div class = "level-page center">
  <div class = "level-page-heading center">
    <div class="time-game">
    <div class="min-sek">
        <p>min</p>
        <p>sek</p>
    </div>

<h2 class="time">00.00</h2>
</div>
<button class ="button-start">Начать заново</button>
 </div>
 <div class="cards">
    <img src="./cards/туз пики.svg" alt="">
    <img src="./cards/туз бубны.svg" alt="">
    <img src="./cards/туз крести.svg" alt="">
    <img src="./cards/туз черви.svg" alt="">
 </div>
                        </div>`;
  contentElement.innerHTML = mediumPageContent;
}

export function renderHardPage({ contentElement }) {
  let hardPageContent = `<div class = "level-page center">
  <div class = "level-page-heading center">
    <div class="time-game">
    <div class="min-sek">
        <p>min</p>
        <p>sek</p>
    </div>

<h2 class="time">00.00</h2>
</div>
<button class ="button-start">Начать заново</button>
 </div>
 <div class="cards">
    <img src="./cards/туз пики.svg" alt="">
    <img src="./cards/туз бубны.svg" alt="">
    <img src="./cards/туз крести.svg" alt="">
    <img src="./cards/туз черви.svg" alt="">
 </div>
                        </div>`;
  contentElement.innerHTML = hardPageContent;
}
