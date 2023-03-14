import React from 'react'
import Answers from './Answers'
import he from 'he'


export default function Questions(props) {
    const { questions } = props
    return (
        <div className='question__container'>
            {questions.map(question => (
                <div key={question.id}>
                    <h2>{he.decode(question.question)}</h2>
                    <Answers answers={question.answers} />
                </div>
            ))}
        </div>
    )
}

