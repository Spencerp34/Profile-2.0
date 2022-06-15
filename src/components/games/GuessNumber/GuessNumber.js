import styled from "styled-components";
import { useState } from "react";

const GuessDiv = styled.div`
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .pre-game{
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }    
    .lets-go-btn{
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        width: 50%;
        transition: .3s;
    }
    .lets-go-btn:hover{
        color: white;
        border: 1px solid white;
    }
`

const GuessNumber = () => {
    const [inGame, setInGame] = useState(false);



    return(
        <div className="Guess-Number">
            <GuessDiv>
                {
                    inGame 
                    ? 
                        <div className="in-game">
                            <div className="number" onClick={()=>setInGame(false)}>
                                50
                            </div>
                        </div>
                    :
                        <div className="pre-game">
                            <div className="cta">
                                Choose a number between 1 - 100
                            </div>
                            <p>It should take me less than eight guesses</p>
                            <div className="lets-go-btn" onClick={()=>setInGame(true)} >Lets Go!</div>
                            <p>Using O(Log n) algorithm</p>
                        </div>
                }
            </GuessDiv>
        </div>
    )
}

export default GuessNumber;