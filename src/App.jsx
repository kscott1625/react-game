import { useState } from 'react'
import Cell from './components/Cell'


function App() {
const [cells, setCells] =useState("","","","","","","","","",)
  return (
    <>
      <div className='app'>
        <div className='gameboard'>
      {cells.map((cell, index) => <Cell key={index}/>)}
      </div>
      </div>
      
    </>
  )
}

export default App
