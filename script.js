let userScore = document.getElementById('user_score');
let botScore = document.getElementById('bot_score');

const userClickedRock = document.getElementById('rock_div');
const userClickedPaper = document.getElementById('paper_div');
const userClickedScissor = document.getElementById('scissor_div');

const userHand = document.getElementById('user-show-hand');
const botHand = document.getElementById('bot-show-hand');

const toast = document.getElementById('toast-message');
const TIME_OUT = 2000;

toastMsg = (s, time) => {
    toast.classList.add('show');
    toast.innerHTML="🎉  " + s + "  🎉"
    setTimeout(() => {
        toast.classList.remove('show');
    }, time);
}

showBotHand = (v) => {
    if (v === 1) {
        botHand.style.transform = "rotate(-90deg) rotateY(180deg)";
        botHand.className = '';
        botHand.classList.add('fas', 'fa-hand-rock');
    } else if (v === 2) {
        botHand.style.transform = "rotate(90deg) rotateX(180deg)";
        botHand.className = '';
        botHand.classList.add('fas', 'fa-hand-paper');
    } else if (v === 3) {
        botHand.style.transform = "rotate(0deg)";
        botHand.className = '';
        botHand.classList.add('fas', 'fa-hand-scissors');
    }
}

showUserHand = (v) => {
    if (v === 1) {
        userHand.style.transform = "rotate(90deg)";
        userHand.className = '';
        userHand.classList.add('fas', 'fa-hand-rock');
    } else if (v === 2) {
        userHand.style.transform = "rotate(90deg)";
        userHand.className = '';
        userHand.classList.add('fas', 'fa-hand-paper');
    } else if (v === 3) {
        userHand.style.transform = "rotateY(180deg)";
        userHand.className = '';
        userHand.classList.add('fas', 'fa-hand-scissors');
    }
}

score = (user, bot) => {
    let currentUserScore = parseInt(userScore.innerText);
    let currentBotScore = parseInt(botScore.innerText);
    if(user !== bot){
        if ((user === 1 && bot === 3) || (user === 2 && bot === 1) || (user === 3 && bot === 2)) {
            userScore.innerText = currentUserScore+1;
            window.clearTimeout();
            toastMsg(" YOU WON ", TIME_OUT);
        } else botScore.innerText = currentBotScore+1;
    }
}

generateBotHand = (v) => {
    const num = Math.floor(Math.random() * 3) + 1;
    showBotHand(num);
    score(v, num);
}

userClickedRock.addEventListener('click', () => {
    generateBotHand(1);
    showUserHand(1);
});

userClickedPaper.addEventListener('click', () => {
    generateBotHand(2);
    showUserHand(2);
});

userClickedScissor.addEventListener('click', () => {
    generateBotHand(3);
    showUserHand(3);
});