import React from 'react'
import { useState } from 'react'
import Card from './components/Card'



const App = () => {

  const [xotira, asilXotira] = useState("")

  const handleClick = function () {
    alert("Salom")
  }

  const textChange = (event) => {
    asilXotira(event.target.value)
  }

  const [agreed, setAgreed] = useState(false)

  const isChecked = () => {
    alert("Bosildi")
  }
  return (
    <div>

      <button onClick={handleClick}>Click Me</button>

      <input type="text" onChange={textChange} />

      <input
        type="checkbox"
        onClick={isChecked}
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}  // use .checked not .value
      />

      <select >
        <option value="Sattor">Sattor</option>
        <option value="Usmon">Usmon</option>

        <option value="Mamatqul">Mamatqul</option>

      </select>

      <p>{xotira}</p>

      <Card />
    </div>
  )
}

export default App