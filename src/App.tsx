import { useState } from 'react'
import reactLogo from './assets/react.svg'
import janoLogo from './assets/jano-logo.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
    
        <a href="https://www.facebook.com/curso.de.filosofia.en.managua/" target="_blank">
          <img src={janoLogo} className="logo react jano" alt="React logo" />
        </a>
       

        
      </div>
      <h1>Jano - Espacio cultural</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
