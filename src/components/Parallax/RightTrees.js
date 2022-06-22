import styled from "styled-components"
import { parallaxObj } from "../../groups/images"
const {rightTrees} = parallaxObj;

const RightTreesDiv = styled.div`
    align-items: stretch;
    .image{
        display: flex;
        align-items: end;
    }
    img{
        width: 100vw;
    }
    

`

const RightTrees = (props) =>{

    const {focusState, focusClasses, treesOpen} = props
    const slideRight = (treesOpenState) => {
        if(treesOpenState){
          return "slide-right"
        }
    }

    return(
        <RightTreesDiv>
            <div className={`image ${focusClasses(focusState)} ${slideRight(treesOpen)}`} >
                <img src={rightTrees} alt="right-trees" />
            </div>

        </RightTreesDiv>
    )
}

export default RightTrees