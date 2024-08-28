import React from 'react'
import { useState } from 'react'
import womanImage from '../assets/woman.svg'
import Question from './Question'
export default function Faq() {
  const [active, setActive] = useState(0)

  return (
    <div className='container'>
      <div className="leftside">
        <img className='womanimage' src={womanImage} alt="" />
      </div>
      <div className="rightside">
        <h1>FAQ</h1>
        <Question 
        id={1}
        question = 'How many team members can I invite?'
        active={active}
        setActive={setActive}
         />
         {active === 1 ? <p>answer1</p> : null }
        <div className="line"></div>
        <Question
         id={2}
         question = 'What is the maximum file upload size?' 
         active={active}
         setActive={setActive}
         />
          {active === 2 ? <p>answer2</p> : null }
        <div className="line"></div>
        <Question
         id={3}
        question = 'How do I reset my password?'
        active={active}
        setActive={setActive}
        />
         {active === 3 ? <p>answer3</p> : null }
        <div className="line"></div>
        <Question
        id={4}
        question = 'Can I cancel my subscription?'
        active={active}
        setActive={setActive}
        />
         {active === 4 ? <p>answer4</p> : null }
        <div className="line"></div>
        <Question
         id={5}
        question = 'Do you provide additional support?' 
        active={active}
        setActive={setActive}
        />
         {active === 5 ? <p>answer5</p> : null }
        <div className="line"></div>

      </div>
    </div>
  )
}
