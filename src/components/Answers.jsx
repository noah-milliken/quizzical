import React from "react";
import he from 'he'

export default function Answers(props) {
    const { answers } = props

    return (
        <div className="question__answer--container">
            {answers.map((answer, index) => (
                <div key={index}>
                    <button className="question__answer--button">{he.decode(answer)}</button>
                </div>
            ))}
        </div>
    )
}