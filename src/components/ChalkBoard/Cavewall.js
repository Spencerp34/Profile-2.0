import {parallaxObj} from "../../groups/images";
import styled from "styled-components";
import Chalkboard from './Chalkboard';

const {chalkboard} = parallaxObj;

const CavewallDiv = styled.div`
    .cavewall-div{
        width: 100vw;
        position: absolute;
        display:inline-block;
        transition: 3s;
        left: -110%;
        top: -35%;
        background-image: url(${chalkboard})
    }

    .focused{
        width: 100vw;
        position: absolute;
        display:inline-block;
        transition: 3s;
        left: 0%;
        top: -35%;
        background-image: url(${chalkboard})
    }

    .chalkboard{
        top: 0;
        left: 0;
        width: 100%;
        object-fit: contain;
        object-position: center center;
    }
`

const Cavewall = (props) => {
    const {focusState} = props;
    return(
        <CavewallDiv>
            <div className={focusState === 0 ? "focused" : "cavewall-div"}>
                <div className='chalkboard'>
                    <Chalkboard />
                </div>
            </div>  
        </CavewallDiv>
    )
}

export default Cavewall;