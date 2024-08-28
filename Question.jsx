import React, { useState } from 'react'

export default function Question(props) {
  const {id, question, active, setActive} = props
  console.log(active)
  return (
    <div>
      <p className='questions' onClick={()=>{
        setActive(id)
      }} > {question} </p>
    </div>
  )
}
