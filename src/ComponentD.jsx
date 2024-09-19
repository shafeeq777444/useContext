import React,{useContext}  from 'react'
import { MyContext } from './ComponentA'

function ComponentD(props) {
  const user =useContext(MyContext)
  return (
    <div className='border'>
      <h1>I am component D</h1>
    {/* <h2>{props.drill1} 3</h2>its not working that accesable only the direct parent props only */}
    <h2>{props.drill2} 3 </h2>
    <h2> {user} from ComponentA</h2>
    </div>
  )
}
export default  ComponentD