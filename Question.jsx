import React, { useState } from 'react'

export default function Question(props) {
  const {id, question, active, setActive} = props
  console.log(active)
  return (
    <div>
      <p className='questions' onClick={()=>{
        if(active === id){
          setActive(0)
        }else{
          setActive(id)
        }
        
      }} 
      style={{ color: active === id ? 'red' : 'initial' }}
      > {question} </p>
    </div>
  )
}
