import React from 'react'
import Answer from './Answer';
import { data } from './Api'

export default function Question (props) {

    function collectAnswers(){
        let answer = [];
        answer.push(
            {value: data.results[props.questionNum].correct_answer, correct: true, held: false}
        )
        let incorrectAnswerArr = data.results[props.questionNum].incorrect_answers;
        for (let i = 0; i < incorrectAnswerArr.length; i++){
            answer.push({value: incorrectAnswerArr[i], correct: false,})
        }
        for (let i = answer.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = answer[i];
            answer[i] = answer[j];
            answer[j] = temp;
        }
        return answer;
        
    }

    const [answer, setAnswer] = React.useState(collectAnswers())
    
console.log(answer)
    
    const answerRender = answer.map(option => {
        return <Answer value={option.value} correct={option.correct} held={option.held}/>
    })
   
    return(
        <div className='question'>
            <h1>{data.results[props.questionNum].question}</h1>
            <div className='answer-choices'>
                {answerRender} 
            </div>
        </div>
        
    )
}