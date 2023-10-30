import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Icon from './Component/Icon'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://svgsilh.com/svg/1531570-ff9800.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="https://svgsilh.com/svg/1139378-e91e63.svg"className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Xin lũi vì hôm nay hong cóa thời gian choa bà nhìu nhen</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          Love
        </button> */}
         <Icon />
        <p style={{fontSize:"2em",fontStyle:"italic",fontWeight:"bold"}}>
          Tui vẫn lun nhớ bà, iu nhìu lắm ạ!!!
        </p>
      </div>
      
    </>
  )
}

export default App
