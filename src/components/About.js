import styled from "styled-components";
import { aboutObj } from "../groups/images";

const AboutDiv = styled.section`
    .no-slide{
        transition: transform 3s;
        left: 20%;
    }

    .ultra-right{
        transition 2s;
        left: 200%;
    }

    .ultra-left{
        transition 2s;
        left: -200%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    display:inline-block;
    .About{
        position: absolute;
        top: -20%;
        width: 60vw;
        color: black;
        background-color: rgba(196, 196, 196, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 80vh;
        border-radius: 15px;
    }
`

const position = (focusState)=>{
    if(focusState === 3){
        return "no-slide"
    }else if(focusState < 3){
        return "ultra-right"
    }else if(focusState > 3){
        return "ultra-left"
    }
}

const About = (props) =>{
    const {github, linkedIn, email, phone} = aboutObj;
    const {focusState} = props;

    return(
        <AboutDiv>
            <section className={`${position(focusState)} About`}>
                <div className="contact">
                    <img src={phone} alt="phone" width={"100px"}/>
                    <img src={email} alt="email" width={"100px"} />
                    <img src={github} alt="github" width={"100px"} />
                    <img src={linkedIn} alt="linkedIn" width={"100px"} />
                </div>
            </section>
        </AboutDiv>
    )
}

export default About;