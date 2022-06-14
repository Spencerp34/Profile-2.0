import { useState } from "react";
import {TicTacToeDiv} from "./tttStyle";


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

    return(
        <TicTacToeDiv>
            <div className="TicTacToe">
                <div className={`board ${turn}`}>
                    <div className={`cell ${moves.cell1}`}></div>
                    <div className={`cell ${moves.cell2}`}></div>
                    <div className={`cell ${moves.cell3}`}></div>
                    <div className={`cell ${moves.cell4}`}></div>
                    <div className={`cell ${moves.cell5}`}></div>
                    <div className={`cell ${moves.cell6}`}></div>
                    <div className={`cell ${moves.cell7}`}></div>
                    <div className={`cell ${moves.cell8}`}></div>
                    <div className={`cell ${moves.cell9}`}></div>
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