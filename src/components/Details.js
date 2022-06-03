import styled from "styled-components";
import options from "../groups/options.js";

const DetailsDiv = styled.div`
    .image{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .thumbnail{
        width: 50%;
    }
`
const Details = (props) => {
    const {category} = props;
    
    return(
        <DetailsDiv>
            <div className="image">
                <img src={options[category].thumbnailImg} alt={options[category].short} className={"thumbnail"} />
            </div>
            <div className="description">
                <h5>Visit this site to see:</h5>
                <h6>{options[category].strengths}</h6>
            </div>
        </DetailsDiv>
    )
}

export default Details;