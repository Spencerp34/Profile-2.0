import styled from "styled-components";

const TicTacToeDiv = styled.div`
    .board{
        display: grid;
        justify-content: center;
        align-content: center;
        grid-template-columns: repeat(3,auto);
    }

    .cell{
        width: 100px;
        height: 100px;
        background-color: black;
        border: 1px solid white;
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
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
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