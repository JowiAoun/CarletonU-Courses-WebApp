import { useState } from 'react'
import '../styles/styles.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <h1>Vite + React</h1>
      <div className="card">
        <button className='text-3xl font-bold underline' onClick={() => setCount((count) => count + 1)}>
          (click here) count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}