import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [dbName, setDbName] = useState('')

  const createDB = () => {
    console.log(`createDB ${dbName}`)
    axios.post(`http://localhost:5175/db/create/${dbName}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const inputListener = (event: any) => {
    setDbName(event.target.value)
  }

  return (
    <div className="App">
      squirrel - sqlite3 nodejs interface

      <div>
        DB Name:<input onChange={(e) => inputListener(e)}></input><button onClick={() => {createDB()}}>Create DB</button>
      </div>
    </div>
  )
}

export default App
