import { useState, useEffect } from "react";
import {TicTacToeDiv} from "./tttStyle";
import { checkForWin } from "./outcomes";


const TicTacToe = (props) => {
    const emptyMoves={
        cell1: null,
        cell2: null,
        cell3: null,
        cell4: null,
        cell5: null,
        cell6: null,
        cell7: null,
        cell8: null,
        cell9: null,
    }
    const [turn, setTurn] = useState("o")
    const [moves, setMoves] = useState(emptyMoves)

    useEffect(() => {
        const winCheck =  checkForWin(moves)
        if(winCheck === "x"){
            console.log("x is the winner")
        }else if (winCheck === "o"){
            console.log("o is the winner")
        }else if(winCheck === "draw"){
            console.log("Its a Draw")
        }
    }, [moves])

    const handleClick = (cellnumber) => {
        const formattedString = `cell${cellnumber}`
        if(moves[formattedString] !== "o" && moves[formattedString] !== "x"){
            setMoves({...moves, [formattedString]: turn})
            turn === "o" ? setTurn("x") : setTurn("o")
        }
    }

    return(
        <TicTacToeDiv>
            <div className="TicTacToe">
                <div className={`board ${turn}`}>
                    <div className={`cell ${moves.cell1}`} onClick={()=>{handleClick(1)}}></div>
                    <div className={`cell ${moves.cell2}`} onClick={()=>{handleClick(2)}}></div>
                    <div className={`cell ${moves.cell3}`} onClick={()=>{handleClick(3)}}></div>
                    <div className={`cell ${moves.cell4}`} onClick={()=>{handleClick(4)}}></div>
                    <div className={`cell ${moves.cell5}`} onClick={()=>{handleClick(5)}}></div>
                    <div className={`cell ${moves.cell6}`} onClick={()=>{handleClick(6)}}></div>
                    <div className={`cell ${moves.cell7}`} onClick={()=>{handleClick(7)}}></div>
                    <div className={`cell ${moves.cell8}`} onClick={()=>{handleClick(8)}}></div>
                    <div className={`cell ${moves.cell9}`} onClick={()=>{handleClick(9)}}></div>
                </div>
                
                <div className="winningMessage ">
                    X is the 
                    <br/>
                    Winner! 
                    <button id="resetBtn" onClick={()=>setTurn("x")}>
                        Restart
                    </button>
                </div>
            </div>
        </TicTacToeDiv>
    )
}

export default TicTacToe;