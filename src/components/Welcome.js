import styled from "styled-components";

const WelcomeDiv = styled.div`
    h2, h4 {
        position: absolute;
        top: 40%;
        left: 0;
        right: 0;
        color: #fff;
        text-align: center;
        font-family: Lato;
        font-weight: 300;
        font-size: 50px;
        letter-spacing: 10px;
        margin-top: -60px;
        padding-left: 10px;
        background: -webkit-linear-gradient(white, #38495a);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
  
    h4 {
        top: 60%;
    }
`

const Welcome = () => {
    return(
        <WelcomeDiv>
            <h2>Welcome to my Portfolio</h2>
            <h4>Scroll ▼</h4>
        </WelcomeDiv>
    )
}

export default Welcome;