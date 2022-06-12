import styled from "styled-components";

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

    return(
        <GamesDiv>
            <div className="Games">
                <div className="Intro">
                    Welcome to the Games!
                </div>
                
            </div>            
        </GamesDiv>
    )
}

export default Games;