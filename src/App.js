import './App.css';
import React from 'react';
import { questions } from './Api'

function App() {

  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [showScore, setShowScore] = React.useState(false)
  const [score, setScore] = React.useState(0)

  const handleAnswerClick = (isCorrect) =>{
    currentQuestion < 4 ? setCurrentQuestion(prevQuestion => prevQuestion + 1) : setShowScore(true);

    if(isCorrect === true){
      setScore(prevScore => {
        return prevScore + 1
      })
    }
  }


  return (
    <div className='app'>
      {showScore ? 
      (<div className='score-section'>You scored {score} out of {questions.length}</div>) : 
      (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOptions.map((answerOption) => {
            return <button onClick={() => handleAnswerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          })}
        </div>
      </>
      )}
    </div>
  );
}

export default App;
