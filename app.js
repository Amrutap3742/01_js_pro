let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "Game was draw.Play again";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice , compChoice) => {
    if (userWin) {
        userScore++ ;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++ ;
        compScorePara.innerText = compScore;
        msg.innerText = `You Win! Computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const gencompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const playGame = (userChoice) => {
    console.log(" User choice", userChoice);
    //to generate comp choice ->modular way of programming
    const compChoice = gencompChoice();
    console.log("Computer choice", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice , compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});

