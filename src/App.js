import './App.css';
import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Stars from "./components/Stars/Stars";
import Welcome from './components/Welcome';
import imagesObj from './groups/imagesObj';

function App() {
  const ref = useRef()
  const { leftMountain, rightMountain, leftTrees, rightTrees } = imagesObj

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

        <ParallaxLayer
          offset={1}
          factor={1.0}
          speed={0.15}
          style={{
            backgroundImage: `url(${leftTrees})`,
            backgroundSize: "100%",
          }}
          
        >
        </ParallaxLayer>
      
        <ParallaxLayer
          offset={1}
          factor={1.2}
          speed={0.25}
          style={{
            backgroundImage: `url(${rightTrees})`,
            backgroundSize: "100%",
          }}
          
        >
        </ParallaxLayer>

      
      </Parallax>
    </div>
  );
}

export default App;
