import { useState } from "react";
import {TicTacToeDiv} from "./tttStyle";


const TicTacToe = (props) => {
    const [turn, setTurn] = useState("o")

    return(
        <TicTacToeDiv>
            <div className="TicTacToe">
                <div className={`board ${turn}`}>
                    <div className="cell x"></div>
                    <div className="cell o"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
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