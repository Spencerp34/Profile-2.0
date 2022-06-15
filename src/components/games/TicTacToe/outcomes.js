const outcomes = [
    ["cell1", "cell2", "cell3"],
    ["cell4", "cell5", "cell6"],
    ["cell7", "cell8", "cell9"],
    ["cell1", "cell4", "cell7"],
    ["cell2", "cell5", "cell8"],
    ["cell3", "cell6", "cell9"],
    ["cell1", "cell5", "cell9"],
    ["cell3", "cell5", "cell7"]
];

const checkForWin = (moves) => {
    outcomes.map(outcome => {
        if(outcome[0] === "x" && outcome[1] === "x" && outcome[2] === "x"){
            return("x")
        }else if(outcome[0] === "o" && outcome[1] === "o" && outcome[2] === "o"){
            return("o")
        }
        return null
    })
    const drawCheck = Object.values(moves)
    drawCheck.map(value => {
        if(value === null){
            return null
        }
        return("draw")
    })
}

export {checkForWin};