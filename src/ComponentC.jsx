import React from 'react'
import ComponentD from './ComponentD'

function ComponentC(props) {
  return (
    <div className='border'>
      <h1>I am component C</h1>
      <h2>{props.drill1} 2</h2>
      <ComponentD drill2={props.drill1}/>
    </div>
  )
}

export default ComponentC
