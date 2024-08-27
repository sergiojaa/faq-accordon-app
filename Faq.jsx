import React from 'react'
import womanImage from '../assets/woman.svg'
import Question from './Question'
export default function Faq() {
  return (
    <div className='container'>
      <div className="leftside">
        <img className='womanimage' src={womanImage} alt="" />
      </div>
      <div className="rightside">
        <h1>FAQ</h1>
        <Question question = 'How many team members can I invite?' />
        <div className="line"></div>
        <Question question = 'What is the maximum file upload size?' />
        <div className="line"></div>
        <Question question = 'How do I reset my password?' />
        <div className="line"></div>
        <Question question = 'Can I cancel my subscription?' />
        <div className="line"></div>
        <Question question = 'Do you provide additional support?' />
        <div className="line"></div>

      </div>
    </div>
  )
}
