import styled from "styled-components";
import options from "../groups/options.js";

const CategoryDiv = styled.div`
    width: 100%;

    .category-selection{
        display: flex;
        justify-content: space-evenly;
    }

    .categoryTitle{
        padding: 10px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .underlined{
        text-decoration: underline;
    }
`

const Category = (props) => {
    const {category, setCategory} = props;


    return(
        <CategoryDiv>
            <div className="category-selection">
                {options.map((option) => {
                    const index = options.indexOf(option)
                    return(
                        <div className={ category === index ? "underlined categoryTitle" : "categoryTitle"} onClick={()=>setCategory(index)} key={option.short} >
                            {option.short}
                        </div>
                    )
                })}

            </div>
        </CategoryDiv>
    )
} 

export default Category