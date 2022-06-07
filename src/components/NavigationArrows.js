import styled from "styled-components";
import {styles} from "../groups/constants";

const NavigationArrowsDiv = styled.div`
    .primaryWhite{
        ${styles.primaryText}
    }
    .right{
        right: 2%;
    }
    .left{
        left: 2%
    }    
`

const NavigationArrows = (props) => {

    const {focus, changeFocusState} = props;

    const handleLeft = () => {
        changeFocusState(focus - 1)
    };
    const handleRight = () => {
        changeFocusState(focus + 1)
    };

    const jsx = (focusState) => {
        if(focusState === 0){
            return(
                <section className="navigation-arrows">
                    <div 
                        className="right primaryWhite"
                        onClick={() => handleRight()}
                    >
                        ▶
                    </div>
                </section>
            )
        }else if ( focus === 2){
            return(
                <section className="navigation-arrows">
                    <div 
                        className="left primaryWhite"
                        onClick={() => handleLeft()}
                    >
                            ◀
                    </div> 
                </section>
                
            )
        }else{
            return(
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
            )
        }
    }
    



    return(
        <NavigationArrowsDiv>
            {jsx(focus)}
        </NavigationArrowsDiv>
    )
}

export default NavigationArrows