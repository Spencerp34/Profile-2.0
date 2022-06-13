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

    .cell.x::before, .cell.x::after{
        content: '';
        position: absolute;
        width: 15px;
        height: 100px;
        background-color: black;
    }
    .cell.x::before{
        transform: rotate(-45deg);
    }
    .cell.x::after{
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

`

const TicTacToe = (props) => {

    return(
        <TicTacToeDiv>
            <div className="TicTacToe">
                <div className="winningMessage">
                    X is the Winner! 
                </div>
                <div className="board">
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