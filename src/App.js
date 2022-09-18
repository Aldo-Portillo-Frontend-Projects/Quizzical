import './App.css';
import React from 'react';
import { formatAPI } from './formatAPI'
import { baseQuestions } from './Api.js'

function App() {

  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [showScore, setShowScore] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [questions, setQuestions] = React.useState(baseQuestions)

  React.useEffect(function () { 
    fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
          .then(res => res.json())
          .then(data => setQuestions(formatAPI(data)))
        }, [showScore])




  const handleAnswerClick = (isCorrect) =>{
    currentQuestion < 4 ? setCurrentQuestion(prevQuestion => prevQuestion + 1) : setShowScore(true);

    if(isCorrect === true){
      setScore(prevScore => {
        return prevScore + 1
      })
    }
  }

  const handleNewQuizClick = () => {
    setCurrentQuestion(0)
    setShowScore(false)
    setScore(0)
  }

  return (
    <div className='app'>
      {showScore ? 
      (
      <div className='new-quiz-page centered'>
        <div className='score-section'>You scored {score} out of {questions.length}</div>
        <button className='new-quiz-button' onClick={handleNewQuizClick}>New Quiz</button>
      </div>
      ) : 
      (
      <div className='question-page centered'>
        <div className='question-section'>
          <h3 className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </h3>
          <h2 className='question-text'>{questions[currentQuestion].questionText}</h2>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOptions.map((answerOption) => {
            return <button onClick={() => handleAnswerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          })}
        </div>
      </div>
      )}
    </div>
  );
}

export default App;