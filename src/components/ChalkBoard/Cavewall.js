import {parallaxObj} from "../../groups/images";
import styled from "styled-components";
import Chalkboard from './Chalkboard';

const {chalkboard} = parallaxObj;

const CavewallDiv = styled.div`

    .no-slide{
        transition: transform 3s;
        left: 10%;
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
    

    .Cavewall{
        background-image: url(${chalkboard});
        position: absolute;
        top: -20%;
        width: 80vw;
        color: black;
        background-color: rgba(196, 196, 196, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 85vh;
        border-radius: 15px;
    }

`

const position = (focusState)=>{
    if(focusState === 0){
        return "no-slide"
    }else if(focusState < 0){
        return "ultra-right"
    }else if(focusState > 0){
        return "ultra-left"
    }
}

const Cavewall = (props) => {
    const {focusState} = props;
    return(
        <CavewallDiv>
            <div className={`Cavewall ${position(focusState)}`}>
                <div className='test'>
                    <Chalkboard />
                </div>
            </div>  
        </CavewallDiv>
    )
}

export default Cavewall;