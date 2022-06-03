import styled from "styled-components";
import options from "../groups/options.js";

const DetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10vh;
    height: 30vh;

    .image{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .thumbnail{
        width: 50%;
    }

    .description{
        display: flex;
        justify-content: space-evenly;
        height: 30%;
    }

    h5{
        font-size: 1.3rem;
        margin: 5;
    }

    h6{
        font-size: 1rem;
        margin: 0;
    }
`
const Details = (props) => {
    const {category} = props;
    
    return(
        <DetailsDiv>
            <h5>Click image to visit the deployed website</h5>
            <a target="_blank" className='image' href={options[category].url} rel="noreferrer" >
                <img src={options[category].thumbnailImg} alt={options[category].short} className={"thumbnail"} />
            </a>
            <div className="description">
                <h5>Visit this site to see:</h5>
                <h6>{options[category].strengths}</h6>
            </div>
        </DetailsDiv>
    )
}

export default Details;