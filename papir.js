const selectionButton = document.querySelectorAll("[data-selection]")
const finalColumn = document.querySelector("[data-final-column")
const dataComputerScore = document.querySelector("[data-computer-score]")
const yourComputerScore = document.querySelector("[data-your-score]")
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

selectionButton.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
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
}

function addSelectionResult(selection, winner) {
    const div = document.createElement("div")
    div.innerText = selection.option    
    div.classList.add("result-selection")
    if (winner) div.classList.add("winner")
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}

function randomSelection() {
   const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
   return SELECTIONS[randomIndex]
}