import "./App.css";
import { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Stars from "./components/Stars/Stars";
import Welcome from "./components/Welcome";
import Content from "./components/Projects/Projects";
import NavigationArrows from "./components/NavigationArrows";
import Cavewall from "./components/ChalkBoard/Cavewall";
import Games from "./components/Games/Games";
import About from "./components/About/About";
import LeftMountain from "./components/Parallax/LeftMountain";
import RightMountain from "./components/Parallax/RightMountain";
import LeftTrees from "./components/Parallax/LeftTrees";
import RightTrees from "./components/Parallax/RightTrees";
import ParallaxStyleDiv from "./components/Parallax/ParallaxStyle";

function App() {
  const [treesOpen, setTreesOpen] = useState(false);
  const [prevFocus, setPrevFocus] = useState();
  const [focusState, setFocusState] = useState(1);
  const [redSun, setRedSun] = useState(true)
  const ref = useRef();

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

  const blockStartGrey = () => {
    const screenSize = window.innerWidth
    if(screenSize < 400 ){
      return 1.1
    }else if(screenSize < 650){
      return 1.075
    }else if(screenSize < 1500){
      return 1.05
    }else if(screenSize < 2000){
      return 1
    }else{
      return 0.995
    }
  }

  const blockStartBlack = () => {
    const screenSize = window.innerWidth
    if(screenSize < 400 ){
      return 1.05
    }else if(screenSize < 650){
      return 1.03
    }else if(screenSize < 1500){
      return 1.01
    }else if(screenSize < 2000){
      return 1
    }else{
      return 0.995
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
            offset={blockStartBlack()}
            factor={0.5}
            speed={0.2}
            style={{
              backgroundSize: "100%",
              background: `#000000`
            }}
          />
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
            offset={blockStartGrey()}
            factor={1}
            speed={0.4}
            style={{
              backgroundSize: "100%",
              background: `radial-gradient(circle at center bottom, ${redSun ? "red" : "#131321"}, ${redSun ? "red" : "#131321"}, #131321, #131321)`
            }}
          >
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.9}
            factor={0.1}
            speed={0.4}
            style={{
              backgroundSize: "100%",
              background: `${redSun ? "#06171C" : "#131321"}`
            }}
          />
          <ParallaxLayer
            offset={1}
            factor={1}
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
            offset={1.35}
            factor={0.6}
            speed={0.25}
            style={{
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "end",
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
