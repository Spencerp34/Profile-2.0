import DisplayModal from './Modal';
import styled from "styled-components";

const ContentDiv = styled.div`
    .project-title{
        position: absolute;
        bottom: 0%;
        right: 40%;
        color: #fff;
        text-align: center;
        font-family: Lato;
        font-weight: 300;
        font-size: 50px;
        letter-spacing: 10px;
        margin-top: -60px;
        padding-left: 10px;
        background: -webkit-linear-gradient(white, #38495a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
    }
    .project-title:hover {
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
                        className="project-title" 
                        onClick={() => setTreesOpen(true)}
                    >
                        See My Projects
                    </div>
            }
        </ContentDiv>
    )
}

export default Content