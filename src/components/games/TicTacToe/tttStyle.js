import styled from "styled-components";

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
        .cell.o::before{
            background-color: black;
        }
            
        .cell.x::before, 
        .cell.x::after,
        .board.x .cell:not(.x):not(.o):hover::before,
        .board.x .cell:not(.x):not(.o):hover::after{
            content: '';
            position: absolute;
            width: 15px;
            height: 100px;
        }
        .cell.x::before,
        .board.x .cell:not(.x):not(.o):hover::before{
            transform: rotate(-45deg);
        }
        .cell.x::after,
        .board.x .cell:not(.x):not(.o):hover::after{
            transform: rotate(45deg);
        }
    
        .cell.o::before, 
        .cell.o::after,
        .board.o .cell:not(.x):not(.o):hover::before,
        .board.o .cell:not(.x):not(.o):hover::after{
            content: '';
            position: absolute;
            background-color: black;
            border-radius: 50%;
        }
        .cell.o::before,
        .board.o .cell:not(.x):not(.o):hover::before{
            width: 90px;
            height: 90px;
        }
        .cell.o::after,
        .board.o .cell:not(.x):not(.o):hover::after{
            width: 60px;
            height: 60px;
            background-color: white;
        }

        .cell:not(.x):not(.o):hover::before,
        .cell:not(.x):not(.o):hover::after,
        .board.o .cell:not(.x):not(.o):hover::before{
            background-color: lightgrey;
        }

        .winningMessage{
            position: fixed;
            top: -35%;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, .8);
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 5rem;
            flex-direction: column;
        }
        .winningMessage button {
            font-size: 3rem;
            background-color: white;
            border: 1px solid black;
            padding: .25em .5em;
            cursor: pointer;
            transition: .3s;
        }

        .winningMessage button:hover{
            background-color: black;
            color: white;
            border-color: white;
        }

        .winningMessage.show{
            display: flex;
        }

        .winningMessage.hidden{
            display: none;
        }
    
    `

    export {TicTacToeDiv};