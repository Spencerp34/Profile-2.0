import "./App.css";
import { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Stars from "./components/Stars/Stars";
import Welcome from "./components/Welcome";
import styled from "styled-components";
import Content from "./components/Projects/Content";
import NavigationArrows from "./components/NavigationArrows";
import Cavewall from "./components/ChalkBoard/Cavewall";
import Games from "./components/Games/Games";
import About from "./components/About/About";
import LeftMountain from "./components/Parallax/LeftMountain";
import RightMountain from "./components/Parallax/RightMountain";
import LeftTrees from "./components/Parallax/LeftTrees";
import RightTrees from "./components/Parallax/RightTrees";

const ParallaxStyleDiv = styled.div`
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
    transform: translateX(100%);
  }

  .ultra-left{
    transition 2s;
    transform: translateX(-100%);
  }
`

function App() {
  const [treesOpen, setTreesOpen] = useState(false);
  const [prevFocus, setPrevFocus] = useState();
  const [focusState, setFocusState] = useState(1);
  const ref = useRef();
  const [redSun, setRedSun] = useState(true)

  const focusClasses = (focusState) => {
    switch (focusState) {
      case 1: 
        return "no-slide"
      case 2:
        return "ultra-left"
      case 0:
        return "ultra-right"
      default: 
        return "ultra-left"
    }
  }

  const changeFocusState = (intiger) => {
    setPrevFocus(focusState)
    setFocusState(intiger)
  }


  useEffect(()=>{
    if(prevFocus === undefined){
      setRedSun(true);
    }else if(prevFocus === 1 && focusState === 2){
      setTimeout(() => {setRedSun(false)}, 300);
    }else if(prevFocus === 0 && focusState === 1){
      setTimeout(() => {setRedSun(true)}, 1500);
    }else if(prevFocus === 2 && focusState === 1){
      setTimeout(() => {setRedSun(true)}, 1500);
    }else if (prevFocus === 1 && focusState === 0){
      setTimeout(() => {setRedSun(false)}, 300);
    }
  }, [focusState, prevFocus])

  return (
    <div className="App">
      <Parallax 
        pages={2}
        ref={ref}
        >
          <ParallaxStyleDiv>
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
            factor={0.5}
            speed={0.2}
            style={{
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "end",
            }}
          >
            <LeftMountain />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.9}
            factor={0.6}
            speed={0.4}
            style={{
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "end",  
            }}
          >
            <RightMountain />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            factor={1}
            speed={0.4}
            style={{
              backgroundSize: "100%",
              background: `radial-gradient(${redSun ? "crimson" : "#131321"}, #131321, #131321, #131321)`
            }}
            
          >

          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            factor={1.0}
            speed={0.15}
            style={{
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "end",  
            }}
          >
            <LeftTrees focusState={focusState} focusClasses={focusClasses} treesOpen={treesOpen}/>
          </ParallaxLayer>
        
          <ParallaxLayer
            offset={1}
            factor={1.2}
            speed={0.25}
            style={{
              backgroundColor: "transparent",
              display: "flex",  
            }}
          >
            <RightTrees focusState={focusState} focusClasses={focusClasses} treesOpen={treesOpen} />
          </ParallaxLayer>

          <ParallaxLayer
              offset={1.25}
              factor={0.75}
              speed={1.2}
              onClick={() => ref.current.scrollTo(2)}
            >
              {redSun
                ? <Content setTreesOpen={setTreesOpen} treesOpen={treesOpen} />
                : null
              } 
              <Cavewall focusState={focusState} />                
              <Games focusState={focusState} />
              <About focusState={focusState} />
              <NavigationArrows ref={ref} focusState={focusState} changeFocusState={changeFocusState} />
          </ParallaxLayer>
        </ParallaxStyleDiv>
      
      </Parallax>
    </div>
  );
}

export default App;
