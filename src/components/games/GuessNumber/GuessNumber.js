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
    const [guesses, setGuesses] = useState(8);
    const [number, setNumber] = useState(50)

    const handleClick = (direction) => {
        setGuesses(guesses -1)
        setNumber(number + 1)
    }


    return(
        <div className="Guess-Number">
            <GuessDiv>
                {
                    inGame 
                    ? 
                        <div className="in-game">
                            <div className="number lets-go-btn" onClick={()=>setInGame(false)}>
                                Go back
                            </div>
                            <div className="guesses">{guesses}</div>
                            <div className="number" > Is your number: {number}? </div>
                            <div className="moreOrLess">
                                <button className="less" onClick={()=>handleClick("less")}>Less</button>
                                <button className="more" onClick={()=>handleClick("more")}>More</button>
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