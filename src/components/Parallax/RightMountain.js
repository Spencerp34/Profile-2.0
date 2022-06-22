import styled from "styled-components"
import { parallaxObj } from "../../groups/images"
const {rightMountain} = parallaxObj;

const RightMountainDiv = styled.div`
    align-items: stretch;
    .image{
        display: flex;
        align-items: end;
    }
    img{
        width: 100vw;
    }
    

`

const RightMountain = () =>{

    return(
        <RightMountainDiv>
            <div className="image">
                <img src={rightMountain} alt="right-mountain" />
            </div>

        </RightMountainDiv>
    )
}

export default RightMountain