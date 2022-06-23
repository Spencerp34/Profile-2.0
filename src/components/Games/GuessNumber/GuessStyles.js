import styled from "styled-components";

const GuessDiv = styled.div`
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
    .btn {
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
        width: 60%;
        transition: .3s;
    }
    .go-back:hover{
        color: grey;
        border: 1px solid grey;
    }
    .in-game{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 60vh;
    }

    #correct{
        color: white;
        border: 1px solid white;
    }

    #correct:hover{
        color: green;
        border: 1px solid green;
    }

    .more:hover, .less:hover{
        color: white;
        border: 1px solid white;
    }
`

export default GuessDiv;