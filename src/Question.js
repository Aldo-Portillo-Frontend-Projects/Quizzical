// import React from 'react'
// import Answer from './Answer';
// import { data } from './Api'
// import { nanoid } from 'nanoid'

// export default function Question (props) {

//     function collectAnswers(){
//         let answer = [];
//         answer.push(
//             {
//                 key: nanoid(),
//                 value: data.results[props.questionNum].correct_answer, 
//                 correct: true, 
//                 isHeld: false,
//                 id: nanoid()}
//         )
//         let incorrectAnswerArr = data.results[props.questionNum].incorrect_answers;
//         for (let i = 0; i < incorrectAnswerArr.length; i++){
//             answer.push({
//                 key: nanoid(),
//                 value: incorrectAnswerArr[i], 
//                 correct: false, 
//                 isHeld: false,
//                 id: nanoid(),
//             })
//         }
//         for (let i = answer.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             let temp = answer[i];
//             answer[i] = answer[j];
//             answer[j] = temp;
//         }
//         return answer;
        
//     }

//     const [answer, setAnswer] = React.useState(collectAnswers())
    
//     function selectAnswer (id) {

//         setAnswer(oldAnswer => oldAnswer.map(option => {
//             //return a new object that changes the isHeld property of the object in new array
//             return option.id === id ? 
//                 {...option, isHeld: !option.isHeld} :
//                 //If not, return regular array
//                 option;
//         }))
//     }

    
    
//     const answerRender = answer.map(option => {
//         return <Answer value={option.value} correct={option.correct} clickHandle={() => selectAnswer(option.id)} isHeld={option.isHeld}/>

//     })
//     //console.log(answer)

//     function submitAnswers() {
//         for(let i = 0; i < answer.length; i++){
//             console.log("Is answer selected " + answer[i].isHeld)
//             console.log("IS answer correct " + answer[i].correct)
//         }
//     }
//     //submitAnswers()
   
//     return(
//         <div className='question'>
//             <div className='question-container'>
//                 <h1>{data.results[props.questionNum].question}</h1>
//                 <div className='answer-choices'>
//                     {answerRender} 
//                 </div>
//             </div>    
//         <button className='submit-button' onClick={()=> submitAnswers()}>Check Answers</button>
//         </div>
        
//     )
// }