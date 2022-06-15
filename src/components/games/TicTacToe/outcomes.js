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
    let answer = "Nothing"
    outcomes.map(outcome => {
        if(moves[outcome[0]] === "x" && moves[outcome[1]] === "x"){
            if(moves[outcome[2]] === "x"){
                answer = "x"
            }
        }else if(moves[outcome[0]] === "o" && moves[outcome[1]] === "o"){
            if(moves[outcome[2]] === "o"){
                answer = "o"
            }
        }
        return "Keep Playing"
    })

    const notNull = (value) => {if(value === null){return false} return true}
    const drawCheck = Object.values(moves)
    if(drawCheck.every(value => notNull(value))){
        answer = "draw"
    }
    return answer
}

export {checkForWin};