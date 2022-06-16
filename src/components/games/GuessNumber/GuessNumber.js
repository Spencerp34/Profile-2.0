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
    span{
        color: tomato;
    }
`

const GuessNumber = () => {
    const [inGame, setInGame] = useState(false);
    const [guesses, setGuesses] = useState(8);
    const [number, setNumber] = useState(50)
    const [range, setRange] = useState({high: 100, low: 0})

    const handleClick = (direction) => {
        if(direction === "more"){
            setRange({...range, low: number})
            let average = Math.floor((number + range.high)/2)
            setNumber(average)
        }else if(direction === "less"){
            setRange({...range, high: number})
            let average = Math.floor((number + range.low)/2)
            setNumber(average)
        }
        setGuesses(guesses -1)
    }

    const reset = () => {
        setGuesses(8)
        setNumber(50)
        setRange({high: 100, low: 0})
    }

    const handleVictory = () =>{
        reset()
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
                            <div className="guesses">Guesses: {guesses}</div>
                            <div className="number" > Is your number: <span>{number}</span>? </div>
                            <button className="correct" onClick={() => handleVictory()}>Correct!</button>
                            <div className="moreOrLess">
                                <button className="less" onClick={()=>handleClick("less")}>Less</button>
                                <button className="more" onClick={()=>handleClick("more")}>More</button>
                            </div>
                            <button onClick={()=>reset()}>Reset</button>
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