import DisplayModal from './Modal';
import styled from "styled-components";
import {styles} from "../groups/constants";

const ContentDiv = styled.div`
    .project-title {
        ${styles.primaryText}
    }

    .primaryWhite{
        ${styles.primaryText}
    }

    .project-title{
        bottom: 0%;
        right: 40%;
        text-align: center;
        letter-spacing: 10px;
        margin-top: -60px;
        padding-left: 10px;
        -webkit-background-clip: text;
        text-decoration: underline;
    }
    .project-title:hover {
        text-decoration: underline;
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

const Content = (props) => {
    const {treesOpen, setTreesOpen} = props
    const handleLeft = () => {
        console.log("going left")
    }
    const handleRight = () => {
        console.log("going right")
    }

    return(
        <ContentDiv>
            {treesOpen
                ?   <div className="modal">
                        <DisplayModal  {...props} />
                    </div>
                :   
                    <section className="navigation-arrows">
                        <div 
                            className="left primaryWhite"
                            onClick={() => handleLeft()}
                        >
                                ◀
                        </div>
                        <div 
                            className="project-title primaryWhite" 
                            onClick={() => setTreesOpen(true)}
                        >
                            See My Projects ▼
                        </div>
                        <div 
                            className="right primaryWhite"
                            onClick={() => handleRight()}
                        >
                            ▶
                        </div>
                    </section>
            }
        </ContentDiv>
    )
}

export default Content