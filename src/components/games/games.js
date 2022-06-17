import styled from "styled-components";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import TicTacToe from "./TicTacToe/tictactoe";
import GuessNumber from "./GuessNumber/GuessNumber";

const GamesDiv = styled.div`
    .no-slide{
        transition: transform 3s;
        transform: translate(0%);
    }

    .ultra-right{
        transition 2s;
        transform: translateX(150%);
    }

    .ultra-left{
        transition 2s;
        transform: translateX(-150%);
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 20%;
    top: -20%;
    display:inline-block;
    width: 60vw;
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

const position = (focusState)=>{
    if(focusState === 2){
        return "no-slide"
    }else if(focusState < 2){
        return "ultra-right"
    }else if(focusState > 2){
        return "ultra-left"
    }
}

const Games = (props) => {    
    const [game, setGame] = useState("Tic-tac-toe")
    const {focus} = props;

    const handleChange=(e)=>{
        setGame(e.target.value)
    }

    return(
        <GamesDiv>
            <div className={`Games ${position(focus)}`}>
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
                           <GuessNumber />
                        </div>
                }
                
                
            </div>            
        </GamesDiv>
    )
}

export default Games;