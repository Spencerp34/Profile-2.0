import { useEffect, useState } from "react";
import GuessDiv from "./GuessStyles";
import JSConfetti from "js-confetti";

const GuessNumber = () => {
    const [inGame, setInGame] = useState(false);
    const [guesses, setGuesses] = useState(6);
    const [number, setNumber] = useState(50)
    const [range, setRange] = useState({high: 100, low: 1})
    const jsConfettiThrow = new JSConfetti();

    const throwConfetti = (status) =>{
        if(status === "victory"){
            jsConfettiThrow.addConfetti({
                emojis: ["🔥", "💯", "🤘"],
                emojiSize: 150,
                confettiNumber: 50,
            })
        }else{
            jsConfettiThrow.addConfetti({
                emojis: ["☹️", "🖕", "💩"],
                emojiSize: 150,
                confettiNumber: 50,
            })
        }
        
    } 

    
    useEffect(()=>{
        if(guesses < 0){
            throwConfetti("liar") 
            reset()
        }
       // eslint-disable-next-line
    }, [guesses]);

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
        throwConfetti("victory")
        reset();
    }


    return(
        <div className="Guess-Number">
            <GuessDiv>
                {
                    inGame 
                    ? 
                        <div className="in-game">
                            <div className="go-back btn" onClick={()=>setInGame(false)}>
                                ← Go back
                            </div>
                            <div className="guesses">Guesses: <span style={{color: "crimson"}} >{guesses}</span></div>
                            <div className="more btn" onClick={()=>handleClick("more")}>More +</div>
                            <div className="number" > Is your number: <span style={{color: "blue"}} >{number}</span>? </div>
                            <div className="less btn" onClick={()=>handleClick("less")}>Less -</div>
                            <div className="correct btn" id="correct" onClick={() => handleVictory()}>Correct!</div>
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