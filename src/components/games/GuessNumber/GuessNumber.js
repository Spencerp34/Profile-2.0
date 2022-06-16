import { useState } from "react";
import GuessDiv from "./GuessStyles";

const GuessNumber = () => {
    const [inGame, setInGame] = useState(false);
    const [guesses, setGuesses] = useState(6);
    const [number, setNumber] = useState(50)
    const [range, setRange] = useState({high: 100, low: 1})

    const handleClick = (direction) => {
        if(direction === "more"){
            setRange({...range, low: number})
            let average = Math.ceil((number + range.high)/2)
            setNumber(average)
        }else if(direction === "less"){
            setRange({...range, high: number})
            let average = Math.floor((number + range.low)/2)
            setNumber(average)
        }
        setGuesses(guesses -1)
    }

    const reset = () => {
        setGuesses(6)
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
                            <div className="lets-go-btn" onClick={()=>setInGame(false)}>
                                ← Go back
                            </div>
                            <div className="guesses">Guesses: {guesses}</div>
                            <div className="number" > Is your number: <span>{number}</span>? </div>
                            <div className="btns">
                                <button className="correct" onClick={() => handleVictory()}>Correct!</button>
                                <div className="moreOrLess">
                                    <button className="less" onClick={()=>handleClick("less")}>Less</button>
                                    <button className="more" onClick={()=>handleClick("more")}>More</button>
                                </div>
                                <button onClick={()=>reset()}>Reset</button>
                            </div>
                        </div>
                    :
                        <div className="pre-game">
                            <div className="cta">
                                Choose a number between 1 - 100
                            </div>
                            <p>It should take me less than six guesses</p>
                            <div className="lets-go-btn" onClick={()=>setInGame(true)} >Lets Go!</div>
                            <p>Using O(Log n) algorithm</p>
                        </div>
                }
            </GuessDiv>
        </div>
    )
}

export default GuessNumber;