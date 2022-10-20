let homeScore = 0;
let guestScore = 0;

let homeScoreComp = document.getElementById('home_score');
let guestScoreComp = document.getElementById('guest_score');
let timeComp = document.getElementById('time');

let homeWindow = document.getElementById('home_wnd');
let guestWindow = document.getElementById('guest_wnd');

let homeTitle = document.getElementById('home_title');
//let timeTitle = document.getElementById('time_title');
let guestTitle = document.getElementById('guest_title');

let homePlus1Btn = document.getElementById('home_plus1_btn');
let homePlus2Btn = document.getElementById('home_plus2_btn');
let homePlus3Btn = document.getElementById('home_plus3_btn');
let guestPlus1Btn = document.getElementById('guest_plus1_btn');
let guestPlus2Btn = document.getElementById('guest_plus2_btn');
let guestPlus3Btn = document.getElementById('guest_plus3_btn');

const gameTimeMax = 10;
let gameTime = gameTimeMax;
timeComp.textContent = gameTime;

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
        homePlus1Btn.disabled = true;
        homePlus2Btn.disabled = true;
        homePlus3Btn.disabled = true;
        guestPlus1Btn.disabled = true;
        guestPlus2Btn.disabled = true;
        guestPlus3Btn.disabled = true;
        
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
}

function updateScores() {
    homeScoreComp.textContent = homeScore;
    guestScoreComp.textContent = guestScore;
}

function homePlus1Score() {
    homeScore += 1;
    updateScores();
}

function homePlus2Score() {
    homeScore += 2;
    updateScores()
}

function homePlus3Score() {
    homeScore += 3;
    updateScores()
}

function guestPlus1Score() {
    guestScore += 1;
    updateScores()
}

function guestPlus2Score() {
    guestScore += 2;
    updateScores()
}

function guestPlus3Score() {
    guestScore += 3;
    updateScores()
}

function newgame() {
    gameTime = gameTimeMax;
    
    homeScore = 0;
    guestScore = 0;
    updateScores()
    
    homeTitle.classList.remove("win");
            homeTitle.classList.remove("lost");
            homeTitle.classList.remove("draw");
            guestTitle.classList.remove("win");
            guestTitle.classList.remove("lost");
            guestTitle.classList.remove("draw");
    
    homePlus1Btn.disabled = false;
        homePlus2Btn.disabled = false;
        homePlus3Btn.disabled = false;
        guestPlus1Btn.disabled = false;
        guestPlus2Btn.disabled = false;
        guestPlus3Btn.disabled = false;
        
        timeComp.textContent = gameTime;
    setTimer();
}