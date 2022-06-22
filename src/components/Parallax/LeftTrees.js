import styled from "styled-components"
import { parallaxObj } from "../../groups/images"
const {leftTrees} = parallaxObj;

const LeftTreesDiv = styled.div`
    align-items: stretch;
    .image{
        display: flex;
        align-items: end;
    }
    img{
        width: 100vw;
    }
    

`

const LeftTrees = (props) =>{
    const {focusState, focusClasses, treesOpen} = props

    const slideLeft = (treesOpenState) => {
        if(treesOpenState){
          return "slide-left"
        }
      }

    return(
        <LeftTreesDiv>
            <div className={`image ${focusClasses(focusState)} ${slideLeft(treesOpen)}`}>
                <img src={leftTrees} alt="left-trees" />
            </div>

        </LeftTreesDiv>
    )
}

export default LeftTrees