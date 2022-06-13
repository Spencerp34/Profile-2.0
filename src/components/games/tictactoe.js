import styled from "styled-components";
import { useState } from "react";


const TicTacToe = (props) => {
    const [turn, setTurn] = useState("x")


    const TicTacToeDiv = styled.div`
        .board{
            display: grid;
            justify-content: center;
            align-content: center;
            justify-items: center;
            align-items: center;
            grid-template-columns: repeat(3,auto);
        }
    
        .cell{
            width: 100px;
            height: 100px;
            background-color: white;
            border: 1px solid black;
            font: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;
        }
    
        .cell.x, .cell.o{
            cursor: not-allowed;
        }
            
        .cell.x::before, 
        .cell.x::after,
        .board.x .cell:hover::before,
        .board.x .cell:hover::after{
            content: '';
            position: absolute;
            width: 15px;
            height: 100px;
            background-color: black;
        }
        .cell.x::before,
        .board.x .cell:hover::before{
            transform: rotate(-45deg);
        }
        .cell.x::after,
        .board.x .cell:hover::after{
            transform: rotate(45deg);
        }
    
        .cell.o::before, .cell.o::after{
            content: '';
            position: absolute;
            background-color: black;
            border-radius: 50%;
        }
        .cell.o::before{
            width: 90px;
            height: 90px;
            background-color: black;
        }
        .cell.o::after{
            width: 60px;
            height: 60px;
            background-color: white;
        }

        .cell:not(.x):not(.o):hover::before,
        .cell:not(.x):not(.o):hover::after{
            background-color: lightgrey;
        }
    
    `

    return(
        <TicTacToeDiv>
            <div className="TicTacToe">
                <div className="winningMessage">
                    X is the Winner! 
                </div>
                <div className={`board ${turn}`}>
                    <div className="cell x"></div>
                    <div className="cell o"></div>
                    <div className="cell x ghost"></div>
                    <div className="cell o ghost"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </div>
            </div>

        </TicTacToeDiv>
    )
}

export default TicTacToe;