import styled from "styled-components";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import TicTacToe from "./TicTacToe/tictactoe";

const GamesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 10%;
    top: -20%;
    display:inline-block;
    width: 80vw;
    .Games{
        color: black;
        background-color: rgba(196, 196, 196, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 80vh;
        border-radius: 15px;
    }
`

const Games = (props) => {    
    const [game, setGame] = useState("Tic-tac-toe")

    const handleChange=(e)=>{
        setGame(e.target.value)
    }

    return(
        <GamesDiv>
            <div className="Games">
                <div className="Intro">
                    Welcome to the Games!
                </div>
                <Select 
                    labelId="Game-Selection"
                    id="Game-Selection"
                    value={game}
                    label="Game"
                    onChange={handleChange}
                >
                    <MenuItem value={"Tic-tac-toe"}>Tic-tac-toe</MenuItem>
                    <MenuItem value={"Guess-Number"}>Guess-Number</MenuItem>

                </Select>
                {
                    game === "Tic-tac-toe"
                    ?   <div className="ttt">
                            <TicTacToe />
                        </div>
                    :   <div className="Guess-Number">
                            Guess Number
                        </div>
                }
                
                
            </div>            
        </GamesDiv>
    )
}

export default Games;