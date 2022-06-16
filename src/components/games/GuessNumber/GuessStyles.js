import styled from "styled-components";

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
        width: 60%;
        transition: .3s;
    }
    .lets-go-btn:hover{
        color: white;
        border: 1px solid white;
    }
    span{
        color: tomato;
    }
    .in-game{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 60vh;
    }
`

export default GuessDiv;