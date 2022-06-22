import styled from "styled-components";

const WelcomeDiv = styled.div`
    .intro{
        position: absolute;
        top: 30%;
        left: 0;
        right: 0;
    }

    h2, h4 {
        color: #fff;
        text-align: center;
        font-family: Lato;
        font-weight: 300;
        font-size: 50px;
        letter-spacing: 10px;
        padding-left: 10px;
        background: -webkit-linear-gradient(white, #38495a);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        cursor: pointer;
    }
  
    h4 {
        margin-top: 5vh;
    }
`

const Welcome = () => {
    return(
        <WelcomeDiv>
            <div className="intro">
                <h2>Welcome to my Portfolio</h2>
                <h4>Scroll ▼</h4>
            </div>
        </WelcomeDiv>
    )
}

export default Welcome;