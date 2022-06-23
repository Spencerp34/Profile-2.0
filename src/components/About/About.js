import { aboutObj } from "../../groups/images";
import AboutDiv from "./AboutStyle";

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
    const {github, linkedIn, email, phone, profilePic, withWife, fantasyPixel} = aboutObj;
    const {focusState} = props;

    return(
        <AboutDiv>
            <section className={`${position(focusState)} About`}>
                <h2 className="intro">
                    About Me
                </h2>
                <div className="contact">
                    <div className="phone  mini-contact">
                        <img src={phone} id="phone" alt="phone" />
                        <h4>(925) 915 - 1853</h4>
                    </div>
                    <div className="email mini-contact">
                        <img src={email} id="email" alt="email" />
                        <h4>spencerp34@yahoo.com</h4>
                    </div>
                    <div className="github mini-contact link">
                        <a target="_blank" className='image' href="https://github.com/Spencerp34" rel="noreferrer" >
                            <img src={github} id="github" alt="github" />
                            <h4>spencerp34</h4>
                        </a>
                    </div>
                    <div className="linkedIn mini-contact link">
                        <a target="_blank" className='image' href="https://www.linkedin.com/in/spencerp34/" rel="noreferrer" >
                            <img src={linkedIn} id="linkedIn" alt="linkedIn" />
                            <h4>spencerp34</h4>
                        </a>
                    </div>
                </div>
                <div className='info'>
                    <div className='tidbit left'>
                        <h3>Spencer Patterson</h3>
                    </div>
                    <hr className="solid" />
                    <div className='tidbit'>
                        <img  id='spensa' src={profilePic} alt='profilePicture'/>
                    </div>
                    <div className='tidbit'>
                        <h3> Full Stack Web Developer </h3>
                        <h5 id='bloomtech'> Bloom Institute of Technology Alumni </h5>
                    </div>
                    <hr className="solid" />
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
                            <li>Game Development</li>
                            <li>Python and C#</li>
                        </ul>
                    </div>
                    <hr className="solid" />
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
                    <h5>Born and Raised in Utah</h5>
                    <p>Married to my wonderful wife!</p>
                    <img src={withWife} id='wife' alt='wife'/>
                    <div className='organized'>
                        <p>Just the biggest nerd around (Lets talk Marvel, DC, Star Wars, Tolkien, Video Games, Movies, and especially Brandon Sanderson books!)</p>
                        <div className='image one'>
                            <img src={fantasyPixel} alt="fantasy pixel ar" />
                        </div>
                        <div className='image two'>
                            <img src="https://i.etsystatic.com/17653747/r/il/b1b2a5/2616825596/il_794xN.2616825596_6a5j.jpg" alt="game-room" />
                        </div>
                        <p>I collect retro video games and comic books</p>
                        <p>I rate all types of Root Beers with over 100 different brands tried (You should try O'zell Root Beer ⭐⭐⭐⭐⭐)</p>
                        <div className='image three'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGE48dIo0Fu0jN38CYWrnWHKJh8F8-INqIw&usqp=CAU" alt="rootbeer" />
                        </div>
                    </div>
                </div>
            </section>
        </AboutDiv>
    )
}

export default About;