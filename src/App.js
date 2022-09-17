import React from 'react';
import './App.css';
import {data} from './Api'
import { nanoid } from 'nanoid';
import Component from './Component';


function App() {

//Collect data needed from API
function collectAnswers(num){
          let answer = [];
          answer.push(
              {
                  key: nanoid(),
                  value: data.results[num].correct_answer, 
                  correct: true, 
                  isHeld: false,
                  id: nanoid()}
          )
          let incorrectAnswerArr = data.results[num].incorrect_answers;
          for (let i = 0; i < incorrectAnswerArr.length; i++){
              answer.push({
                  key: nanoid(),
                  value: incorrectAnswerArr[i], 
                  correct: false, 
                  isHeld: false,
                  id: nanoid(),
              })
          }
          for (let i = answer.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1));
              let temp = answer[i];
              answer[i] = answer[j];
              answer[j] = temp;
          }
          return answer;
          
      }
      console.table(collectAnswers(0))

      const [answers, setAnswers] = React.useState(collectAnswers(0))

  return (
    <div className='container'>
      <h1>Quizzical</h1>
      <Component question = {data.results[0].question} answers={answers}/> {/* Redndered components mapped */}
      <Component question = {data.results[1].question} answers={answers}/>
      <Component question = {data.results[2].question} answers={answers}/>
      <Component question = {data.results[3].question} answers={answers}/>
      <Component question = {data.results[4].question} answers={answers}/>

      <button className='submit-button'>Submit</button>
    </div>
  );
}

export default App;
