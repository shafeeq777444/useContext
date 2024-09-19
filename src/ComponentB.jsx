import React from 'react'
import ComponentC from './ComponentC'

function ComponentB(props) {
  return (
    <div className='border'>
      <h1>I am component B</h1>
      <h2>{props.msg} 1</h2>
      <ComponentC drill1={props.msg}/>

      
    </div>
  )
}

export default ComponentB
