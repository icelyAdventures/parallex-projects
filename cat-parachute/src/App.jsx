import { useState, onClick, useRef } from 'react'
import './App.css'
import {Parallax, ParallaxLayer} from "@react-spring/parallax"


function App() {
  const [count, setCount] = useState(0)
  const ref = useRef()

  return (
    <div className='container'> 
      <div className='parallax'>
        <Parallax pages={4} ref={ref}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: "url(/images/moon.png",
              backgroundSize: "cover",
            }}
          >
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: "url(/images/land.png",
              backgroundSize: "cover",
            }}
          >
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.1}
            speed={0.05}
            onClick={() => ref.current.scrollTo(3)}
          >
            <h1>Whats up homie?</h1>
          </ParallaxLayer>

          <ParallaxLayer
            id='cat'
            sticky={{
              start: 0.5,
              end: 2
            }}
          >
            <img src="../images/cat.gif" />
          </ParallaxLayer>

          <ParallaxLayer 
          offset={3} 
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
          >
            <h1>This is the next page</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}

export default App
