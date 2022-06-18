import styled from "styled-components";
import { aboutObj } from "../groups/images";

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
        min-height: 70vh;
        border-radius: 15px;
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
    #spensa,
    #wife
    {
        width: 100%;
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
        min-height: 30vh;
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

const position = (focusState)=>{
    if(focusState === 3){
        return "no-slide"
    }else if(focusState < 3){
        return "ultra-right"
    }else if(focusState > 3){
        return "ultra-left"
    }
}

const About = (props) =>{
    const {github, linkedIn, email, phone, profilePic, withWife} = aboutObj;
    const {focusState} = props;

    return(
        <AboutDiv>
            <section className={`${position(focusState)} About`}>
                <div className="intro">
                    About Me
                </div>
                <div className='info'>
                    <div className='tidbit left'>
                        <h3>Spencer Patterson</h3>
                    </div>
                    <hr class="solid" />
                    <div className='tidbit'>
                        <img  id='spensa' src={profilePic} alt='profilePicture'/>
                    </div>
                    <div className='tidbit'>
                        <h3> Full Stack Web Developer </h3>
                        <h5 id='bloomtech'> Bloom Institute of Technology Alumni </h5>
                    </div>
                    <hr class="solid" />
                    <div className='tidbit'>
                        <h4>Full Stack Skills</h4>
                        <ul>
                            <li>HTML, CSS, Javascript</li>
                            <li>React, Redux, Bootstrap</li>
                            <li>Node.js, PostgreSQL, Knex</li>
                            <li>QA testing with Cypress & jest</li>
                        </ul>
                    </div>
                    <div className='tidbit'>
                        <h4>Interests</h4>
                        <ul>
                            <li>Game Development with Unity</li>
                            <li>Python and C#</li>
                        </ul>
                    </div>
                    <hr class="solid" />
                    <div className='tidbit'>
                        <h4>Hobbies</h4>
                        <ul>
                            <li>3D Printing</li>
                            <li>Video & Board Games</li>
                            <li>Learning the Accordion</li>
                        </ul>
                    </div>
                </div>                
                <div className='bio'>
                    <h4>Bio</h4>
                    <br/>
                    <h5>Born and Raised in Utah, spent some years in California in High School.</h5>
                    <p>Married to my wonderful wife!</p>
                    <img src={withWife} id='wife' alt='wife'/>
                    <div className='organized'>
                        <p>Biggest Nerd you'll ever know! (Lets talk Marvel, DC, Star Wars, Tolkien, Video Games, Movies, and especially Brandon Sanderson Books!)</p>
                        <div className='image one'></div>
                        <div className='image two'></div>
                        <p>I collect retro video games and comic books</p>
                        <p>I rate all types of Root Beers with over 100 different brands tried (You should try O'zell Root Beer ⭐⭐⭐⭐⭐)</p>
                        <div className='image three'></div>
                    </div>
                </div>
                <div className="contact">
                    <img src={phone} alt="phone" width={"100px"}/>
                    <img src={email} alt="email" width={"100px"} />
                    <img src={github} alt="github" width={"100px"} />
                    <img src={linkedIn} alt="linkedIn" width={"100px"} />
                </div>
            </section>
        </AboutDiv>
    )
}

export default About;