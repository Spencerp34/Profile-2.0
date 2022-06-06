import styled from "styled-components";
import {styles} from "../groups/constants";

const NavigationArrowsDiv = styled.div`
    .primaryWhite{
        ${styles.primaryText}
    }
    .right{
        top: 50%;
        right: 2%;
    }
    .left{
        top: 50%;
        left: 2%
    }    
`

const NavigationArrows = (props) => {
    const {setFocus} = props
    const handleLeft = () => {
        setFocus("Lake")
    }
    const handleRight = () => {
        setFocus("Cave")
    }

    return(
        <NavigationArrowsDiv>
            <section className="navigation-arrows">
                <div 
                    className="left primaryWhite"
                    onClick={() => handleLeft()}
                >
                        ◀
                </div>
                <div 
                    className="right primaryWhite"
                    onClick={() => handleRight()}
                >
                    ▶
                </div>
            </section>
        </NavigationArrowsDiv>
    )
}

export default NavigationArrows