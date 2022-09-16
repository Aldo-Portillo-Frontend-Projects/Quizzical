import React from 'react'
import { data } from './Api'

export default function Question (props) {
    console.log()
    return(
        <div className='question'>
            <h1>{data.results[props.questionNum].question}</h1>
            
        </div>
        
    )
}