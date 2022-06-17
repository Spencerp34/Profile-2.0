import styled from "styled-components";

const AboutDiv = styled.section`
    .no-slide{
        transition: transform 3s;
        transform: translate(0%);
    }

    .ultra-right{
        transition 2s;
        transform: translateX(100%);
    }

    .ultra-left{
        transition 2s;
        transform: translateX(-100%);
    }
`

const position = (focusState)=>{
    if(focusState === 3){
        return "no-slide"
    }else if(focusState > 3){
        return "ultra-right"
    }else if(focusState < 3){
        return "ultra-left"
    }
}

const About = (props) =>{
    const {focus} = props;

    return(
        <AboutDiv>
            <div className={`${position(focus)}`}>
                Testing
            </div>
        </AboutDiv>
    )
}

export default About;