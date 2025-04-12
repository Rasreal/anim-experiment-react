import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FallingText from "./animation/FallingText.jsx";

function App() {

  return (
    <div className="page">
      {/*<div>*/}
      {/*  <a href="https://vite.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
        <div className="input-container">


        </div>
        <div className="container">
            {/*Original component-те құлап қалған текст, сыртқа ұшып кете алады*/}
            <h2>Оң жағыңызда ҚұлайтынТекст анимациясы, міндетті түрде <strong>враппер контейнер</strong> мен <b>height</b> беру керек.</h2>
            <FallingText
                text={`Дәл сол анимацияны осы жерден көре аласыз `}
                highlightWords={["анимацияны", "көре", "аласыз", "жерден", "сол"]}
                highlightClass="highlighted"
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="2rem"
                mouseConstraintStiffness={0.9}
            />
        </div>


    </div>
  )
}

export default App
