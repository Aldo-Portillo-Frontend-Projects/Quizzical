import React from 'react'
import { data } from './Api'

export default function Question (props) {

    function collectAnswers(){
        let answer = [];
        answer.push(
            {answer: data.results[0].correct_answer, correct: true,}
        )
        let incorrectAnswerArr = data.results[0].incorrect_answers;
        for (let i = 0; i < incorrectAnswerArr.length; i++){
            answer.push({answer: incorrectAnswerArr[i], correct: false,})
        }
        for (let i = answer.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = answer[i];
            answer[i] = answer[j];
            answer[j] = temp;
        }
        return answer;
        
    }
    
console.log(collectAnswers())
    

   
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