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
        bottom: -20%;
        right: 40%;
        text-align: center;
        letter-spacing: 10px;
        padding-left: 10px;
        -webkit-background-clip: text;
        text-decoration: underline;
    }    
`

const Content = (props) => {
    const {treesOpen, setTreesOpen} = props

    return(
        <ContentDiv>
            {treesOpen
                ?   <div className="modal">
                        <DisplayModal  {...props} />
                    </div>
                :   
                    <div 
                        className="project-title primaryWhite" 
                        onClick={() => setTreesOpen(true)}
                    >
                        See My Projects ▼
                    </div>
            }
        </ContentDiv>
    )
}

export default Content