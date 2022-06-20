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
    const [moves, setMoves] = useState(emptyMoves)
    const [turn, setTurn] = useState("x")
    const [winner, setWinner] = useState(null)

    const jsx = (winnerState) =>{
        if(winnerState === "x"){
            return(
                <div className="winningMessage show">
                        X Wins!
                    <button id="resetBtn" onClick={()=>handleRestart()}>
                        Restart
                    </button>
                </div>
            )
        }else if(winnerState === "o"){
            return(
                <div className="winningMessage show">
                        O Wins!
                    <button id="resetBtn" onClick={()=>handleRestart()}>
                        Restart
                    </button>
                </div>
            )
        }else if(winnerState === "draw"){
            return(
                <div className="winningMessage show">
                    <div className="message">
                        It's a Draw
                    </div>
                    <button id="resetBtn" onClick={()=>handleRestart()}>
                        Restart
                    </button>
                </div>
            )
        }else{
            return null;
        }
    }

    useEffect(() => {
        const winCheck =  checkForWin(moves)
        if(winCheck === "x"){
            setWinner("x")
        }else if (winCheck === "o"){
            setWinner("o")
        }else if(winCheck === "draw"){
            setWinner("draw")
        }
    }, [moves])

    const handleClick = (cellnumber) => {
        const formattedString = `cell${cellnumber}`
        if(moves[formattedString] !== "o" && moves[formattedString] !== "x"){
            setMoves({...moves, [formattedString]: turn})
            turn === "o" ? setTurn("x") : setTurn("o")
        }
    }

    const handleRestart = () => {
        setMoves(emptyMoves)
        setWinner(null)
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
                
                {jsx(winner)}
            </div>
        </TicTacToeDiv>
    )
}

export default TicTacToe;