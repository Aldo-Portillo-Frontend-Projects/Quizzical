import React from 'react'
import { data } from './Api'

export default function Question (props) {
    return(
        <div className='question'>
            <h1>{data.results[props.questionNum].question}</h1>
            <div className='answer-choices'>
                <button>{data.results[props.questionNum].correct_answer}</button>
                <button>{data.results[props.questionNum].incorrect_answers[0]}</button>
                <button>{data.results[props.questionNum].incorrect_answers[1]}</button>
                <button>{data.results[props.questionNum].incorrect_answers[2]}</button>
            </div>
        </div>
        
    )
}