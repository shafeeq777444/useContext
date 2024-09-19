import { useState } from 'react'
import ComponentA from './ComponentA'

import './App.css'

function App() {

  // const Obj={key:ComponentA}   /* we can write component into a reference */
  // const A=ComponentA
  return (
    <>
  {/* <A/> 
  <Obj.key/>   */}
  <ComponentA />
    </>
  )
}

export default App
