import styled from "styled-components"
import { parallaxObj } from "../../groups/images"
const {leftMountain} = parallaxObj;

const LeftMountainDiv = styled.div`
    align-items: stretch;
    .image{
        display: flex;
        align-items: end;
    }
    img{
        width: 100vw;
    }
    

`

const LeftMountain = () =>{

    return(
        <LeftMountainDiv>
            <div className="image">
                <img src={leftMountain} alt="test" />
            </div>

        </LeftMountainDiv>
    )
}

export default LeftMountain