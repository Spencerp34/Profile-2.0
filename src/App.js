import './App.css';
import { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import {parralaxObj} from './groups/images';
import Stars from "./components/Stars/Stars";
import Welcome from './components/Welcome';
import styled from "styled-components";
import Content from './components/Content';

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

  .ultra-right{
    transition 2s;
    transform: translateX(100%)
  }
`

function App() {
  const [treesOpen, setTreesOpen] = useState(false);
  const [focus, setFocus] = useState("Projects");
  const ref = useRef()
  const { leftMountain, rightMountain, leftTrees, rightTrees } = parralaxObj;

  const focusClasses = (focusState) => {
    switch (focusState) {
      case "Projects": 
        return "no-slide"
      case "Cave":
        return "ultra-right"
      case "Lake":
        return "ultra-left"
      default: 
        return "no-slide"
    }
  }

  const slideLeft = (treesOpenState) => {
    if(treesOpenState){
      return "slide-left"
    }
  }

  const slideRight = (treesOpenState) => {
    if(treesOpenState){
      return "slide-right"
    }
  }

  return (
    <div className="App">
      <Parallax 
        pages={2}
        ref={ref}
        >
          <TestStyledDiv>
            <ParallaxLayer
              offset={0}
              factor={1}
              speed={1}
              style={{
                backgroundColor: "transparent",
              }}
              onClick={() => ref.current.scrollTo(2)}
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

          <ParallaxLayer
            offset={1}
            factor={1.0}
            speed={0.15}
          >
            <img src={leftTrees} alt="leftTrees." width={"100%"} className={(`${focusClasses(focus)} ${slideLeft(treesOpen)}`)} />
          </ParallaxLayer>
        
          <ParallaxLayer
            offset={1}
            factor={1.2}
            speed={0.25}            
          >
            <img src={rightTrees} alt="rightTrees" width={"100%"} className={(`${focusClasses(focus)} ${slideRight(treesOpen)}`) } />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.24}
            factor={0.4}
            speed={1}
          >
            <Content setTreesOpen={setTreesOpen} treesOpen={treesOpen} setFocus={setFocus} />
            
          </ParallaxLayer>
        </TestStyledDiv>
      
      </Parallax>
    </div>
  );
}

export default App;
