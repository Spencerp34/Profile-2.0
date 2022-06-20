import styled from "styled-components";

const AboutDiv = styled.section`
    .no-slide{
        transition: transform 3s;
        left: 20%;
    }

    .ultra-right{
        transition 2s;
        left: 200%;
    }

    .ultra-left{
        transition 2s;
        left: -200%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    display:inline-block;
    .About{
        position: absolute;
        top: -20%;
        width: 60vw;
        padding: 5vh;
        color: black;
        background-color: rgba(196, 196, 196, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 70vh;
        border-radius: 15px;
        overflow: scroll;
        overflow-x: hidden;
    }

    .contact{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 20vh;
        margin-bottom: 5vh;
    }

    .mini-contact{
        width:20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    a{
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .about{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
    }
    
    .info{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .tidbit{
        width: 40%;
        height: 25vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2vh;
    }
    
    h3{
        font-size: 2rem;
    }
    h4{
        font-size: 1.5rem;
        margin: 5px;
    }
    h5{
        font-size: 1.25rem;
        margin-top: -2.5vh;
    }
    ul{
        list-style-type: square;
        flex-direction: column;
        /* list-style-position: inside; */
    }
    hr.solid {
        border-left: 1px solid black;
        border-right: 1px solid grey;
    }
    img{
        border-radius: 15px;
    }
    #spensa,
    #wife
    {
        width: 60%;
        transform: scaleX(-1);
        border-radius: 15px;
    }
    .organized{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .organized p{
        width: 40%;
       height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .image{
        display: flex;
        width: 55%;
        min-height: 30vh;
        border-radius: 15px;
        background-position: center;
        justify-content: center;
        background-repeat:no-repeat;
        background-size:contain;
        background-position:center;
    }
  
    @media (max-width: 750px){
        hr{
            display: none;
        }
        .info{
            flex-direction: column;
        }
        .tidbit{
            width: 80%;
            height: auto;
            margin: 1%;
        }
        .left{
            padding: 1%;
        }
        h5{
            margin: none;
        }
    }
    @media (max-width: 450px){
        h3{
            font-size: 1rem;
        }
        h4{
            font-size: 0.9rem;
        }
        h5{
            font-size: .8rem;
        }
        .organized{
            flex-direction: column;
        }
        .image{
            min-height: 10vh;
        }
        .organized p{
            min-height: 8vh;
            width: 80%;
        }
        #lambda{
            margin-top: 2%;
        }
        .left{
            height: 3vh;
        }
        .tidbit{
            height: auto;
            margin-top: 3vh;
            margin-bottom: 2vh;
        }
    }
`

export default AboutDiv;