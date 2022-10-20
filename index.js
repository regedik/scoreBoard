var homeScore = 0;
var guestScore = 0;

let homeScoreComp = document.getElementById('home_score');
let guestScoreComp = document.getElementById('guest_score');
let timeComp = document.getElementById('time');

let homeWindow = document.getElementById('home_wnd');
let guestWindow = document.getElementById('guest_wnd');

let homeTitle = document.getElementById('home_title');
//let timeTitle = document.getElementById('time_title');
let guestTitle = document.getElementById('guest_title');

let homePlus1Btn = document.getElementById('home_plus_1_btn');
let homePlus2Btn = document.getElementById('home_plus_2_btn');
let homePlus3Btn = document.getElementById('home_plus_3_btn');
let guestPlus1Btn = document.getElementById('guest_plus_1_btn');
let guestPlus2Btn = document.getElementById('guest_plus_2_btn');
let guestPlus3Btn = document.getElementById('guest_plus_3_btn');
let newgameBtn = document.getElementById('newgame_btn');

const gameTimeMax = 10;
let gameTime = gameTimeMax;

initiate();

function initiate() {
    disablePlusButtons(true);
}

function setTimer() {
    setTimeout(() => {
        timerHandler();
    }, "1000");
}

function timerHandler() {
    gameTime--;
    timeComp.textContent = gameTime;
    
    if(gameTime > 0) {
        setTimer();
    }
    else {
        disablePlusButtons(true);
        highlightTitles();
    }
}

function highlightTitles() {
    if(homeScore > guestScore) {
        homeTitle.classList.add("win");
        guestTitle.classList.add("lost");
    }
    else if(homeScore < guestScore) {
        homeTitle.classList.add("lost");
        guestTitle.classList.add("win");
    }
    else {
        homeTitle.classList.add("draw");
        guestTitle.classList.add("draw");
    }
}

function updateScores() {
    homeScoreComp.textContent = homeScore;
    guestScoreComp.textContent = guestScore;
}

function buttonClickHandler(event) {
    let buttonId = this.event.srcElement.id;
    if('newgame_btn' === buttonId) {
        newgame();
        return;
    }
    
    const [title, ,inc] = buttonId.split("_");
    let varName = title+'Score';
    window[title+'Score'] += Number(inc);
    updateScores();
}

function newgame() {    
    gameTime = gameTimeMax;
    timeComp.textContent = gameTime;
    homeScore = 0;
    guestScore = 0;
    updateScores()
    resetTitles();
    disablePlusButtons(false);
    setTimer();
}

function resetTitles() {
    homeTitle.classList.remove("win");
    homeTitle.classList.remove("lost");
    homeTitle.classList.remove("draw");
    guestTitle.classList.remove("win");
    guestTitle.classList.remove("lost");
    guestTitle.classList.remove("draw");
}

function disablePlusButtons(state) {
    homePlus1Btn.disabled = state;
    homePlus2Btn.disabled = state;
    homePlus3Btn.disabled = state;
    guestPlus1Btn.disabled = state;
    guestPlus2Btn.disabled = state;
    guestPlus3Btn.disabled = state;
    newgameBtn.disabled = !state;
}