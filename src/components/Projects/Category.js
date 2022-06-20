import styled from "styled-components";
import options from "../../groups/options.js";

const CategoryDiv = styled.div`
    width: 100%;

    .category-selection{
        display: flex;
        justify-content: space-evenly;
    }

    .categoryTitle{
        border: 1px solid black;
        padding: 10px;
        font-weight: bold;
        margin-bottom: 18px;
        transition: 0.3s;
        border-radius: 5px;
    }
    .categoryTitle:hover{
        color: #161E23;
        border: 1px solid #161E23;
        margin: 0, 0, 20, 0;
        transition: 0.3s;
    }

    .underlined{
        text-decoration: underline;
        background-color: #cccccc
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