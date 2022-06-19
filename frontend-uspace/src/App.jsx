import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className=''>Hola</h1>
        <p>Hello Vite + React!</p>
        <p>
          <button className='border border-dashed bg-sky-600 rounded-md p-2' type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}

export default App
