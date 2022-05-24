import './App.css';
import { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import imagesObj from './groups/imagesObj';
import Stars from "./components/Stars/Stars";
import Welcome from './components/Welcome';
// import DisplayModal from './components/Modal';
import styled from "styled-components";
import { Switch } from "@mui/material";

const TestStyledDiv = styled.div`
  .no-slide{
    transition: transform 3s;
    transform: translate(0%);
  }

  .slide-left{
    transition: 3s;
    transform: translate(-45%, 10%);
  }

  .slide-right{
    transition: 2s;
    transform: translate(20%, 20%);
  }

  .bluey{
    color: teal;
  }
  .redy{
    color: crimson;
  }
`

function App() {
  // const [modalOpen, setModalOpen] = useState(false);
  const [treesOpen, setTreesOpen] = useState(false);
  const ref = useRef()
  const { leftMountain, rightMountain, leftTrees, rightTrees } = imagesObj;

  // const toggleModal = () => { setModalOpen(!modalOpen) }

  return (
    <div className="App">
      <Parallax 
        pages={2}
        ref={ref}
        >
          <ParallaxLayer
            offset={0}
            factor={1}
            speed={1}
            style={{
              backgroundColor: "transparent",
            }}
            
          >
            <Stars />
            <Welcome />

        </ParallaxLayer>
        
        <ParallaxLayer
          offset={0.75}
          factor={1}
          speed={0.2}
          style={{
            backgroundImage: `url(${leftMountain})`,
            backgroundSize: "100%",
          }}
          
        >

        </ParallaxLayer>

        <ParallaxLayer
          offset={0.9}
          factor={1}
          speed={0.4}
          style={{
            backgroundImage: `url(${rightMountain})`,
            backgroundSize: "100%",     
          }}
          
        >

        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.4}
          style={{
            backgroundSize: "100%",
            background: "radial-gradient(red, #131321, #131321, #131321)"
          }}
          
        >

        </ParallaxLayer>

        <TestStyledDiv>
          <ParallaxLayer
            className={!treesOpen ? "no-slide" : "leftTrees slide-left"}
            offset={1}
            factor={1.0}
            speed={0.15}
            // style={{
            //   transition: "2s",
            //   backgroundImage: `url(${leftTrees})`,
            //   backgroundSize: "100%",
            //   backgroundPositionX: treesOpen ? "left 500px" : "defualt"
            // }}
            
          >
            <img src={leftTrees} alt="leftTrees." width={"100%"} className={!treesOpen ? 'no-slide' : "slide-left"} />
          </ParallaxLayer>
        
          <ParallaxLayer
            offset={1}
            factor={1.2}
            speed={0.25}
            // style={{
            //   transition: "2s",
            //   backgroundImage: `url(${rightTrees})`,
            //   backgroundSize: "100%",
            //   backgroundPositionX: treesOpen ? "right 500px" : "defualt"
            // }}
            
          >
            <img src={rightTrees} alt="rightTrees" width={"100%"} className={!treesOpen ? 'no-slide' : "slide-right"} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.24}
            factor={0.4}
            speed={1}
          >
            {/* {modalOpen 
              ? <DisplayModal openModal={openModal} closeModal={closeModal} /> 
              : <div><h3>See some projects</h3><span onClick={openModal}>Click Here</span></div>
            } */}
            <div onClick={() => setTreesOpen(!treesOpen)}>
                <div className='example'>
                    <Switch defaultChecked />
                </div>
            </div>
            
          </ParallaxLayer>
        </TestStyledDiv>
      
      </Parallax>
    </div>
  );
}

export default App;
