const selectionButton = document.querySelectorAll("[data-selection]")
const finalColumn = document.querySelector("[data-final-column")
const dataComputerScore = document.querySelector("[data-computer-score]")
const yourComputerScore = document.querySelector("[data-your-score]")
const restartButton = document.querySelectorAll(".reloadPage")
const readyToPlay = document.querySelector(".gamestart")
const SELECTIONS = [
    {
        name: "rock",
        option: "stein",
        beats: "scissor"
    },
    {
        name: "paper",
        option: "papir",
        beats: "rock"
    },
    {
        name: "scissor",
        option: "saks",
        beats: "paper"
    }
]
restartButton.forEach(restartButton => {
    restartButton.addEventListener("click", (restartPage))
})

readyToPlay.addEventListener("click", (Saw))

selectionButton.forEach(selectionButton => {
    selectionButton.addEventListener("click", () => {
       const selectionName = selectionButton.dataset.selection
       const selection = SELECTIONS.find(selection => selection.name === selectionName)
       makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    console.log(yourWinner, computerSelection, selection);

    if (yourWinner) incrementScore(yourComputerScore)
    if (computerWinner) incrementScore(dataComputerScore)
}

function incrementScore(scoreSpan) {
   scoreSpan.innerText = parseInt(scoreSpan.innerText)+1
   if (yourComputerScore.innerText == 2)
     return youWin()
   if (dataComputerScore.innerText == 2)
     return youLose()
}

function addSelectionResult(selection, winner) {
    const div = document.createElement("div")
    div.innerText = selection.option    
    if (winner) div.classList.add("result-selection-winner")
    else div.classList.add("result-selection") 
    finalColumn.after(div)
}

function youWin(){
    yourVictoryScreen = document.querySelector('.victoryScreen');
            yourVictoryScreen.style.visibility = 'visible';
}
function youLose(){
    yourLossScreen = document.querySelector('.lossScreen');
            yourLossScreen.style.visibility = 'visible';
}
    
function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}

function randomSelection() {
   const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
   return SELECTIONS[randomIndex]
}

function restartPage(){
    
    console.log("Hello world");
    location.reload();
}

function Saw(){
    console.log("Hello world");
    doYouWantToPlayAGame = document.querySelector(".startscreen");
    doYouWantToPlayAGame.style.visibility = "hidden";
}