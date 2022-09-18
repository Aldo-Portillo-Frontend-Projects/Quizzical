import './App.css';
import React from 'react';
import { questions } from './Api'

function App() {

  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [showScore, setShowScore] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [data, setData] = React.useState({})

  React.useEffect(function () { 
    console.log("effect ran")
    fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
          .then(res => res.json())
          .then(data => setData(data))
        }, [currentQuestion])

  console.table(data)
  const questions = [
    {
        questionText: data.results[0].question,
        answerOptions: [
            {answerText: data.results[0].incorrect_answers[0], isCorrect: false,},
            {answerText: data.results[0].incorrect_answers[1], isCorrect: false,},
            {answerText: data.results[0].incorrect_answers[2], isCorrect: false,},
            {answerText: data.results[0].correct_answer, isCorrect: true,}
        ]
    },
    {
        questionText: data.results[1].question,
        answerOptions: [
            {answerText: data.results[1].incorrect_answers[0], isCorrect: false,},
            {answerText: data.results[1].incorrect_answers[1], isCorrect: false,},
            {answerText: data.results[1].incorrect_answers[2], isCorrect: false,},
            {answerText: data.results[1].correct_answer, isCorrect: true,}
        ]
    },
    {
        questionText: data.results[0].question,
        answerOptions: [
            {answerText: data.results[2].incorrect_answers[0], isCorrect: false,},
            {answerText: data.results[2].incorrect_answers[1], isCorrect: false,},
            {answerText: data.results[2].incorrect_answers[2], isCorrect: false,},
            {answerText: data.results[2].correct_answer, isCorrect: true,}
        ]
    },
    {
        questionText: data.results[0].question,
        answerOptions: [
            {answerText: data.results[3].incorrect_answers[0], isCorrect: false,},
            {answerText: data.results[3].incorrect_answers[1], isCorrect: false,},
            {answerText: data.results[3].incorrect_answers[2], isCorrect: false,},
            {answerText: data.results[3].correct_answer, isCorrect: true,}
        ]
    },
    {
        questionText: data.results[0].question,
        answerOptions: [
            {answerText: data.results[4].incorrect_answers[0], isCorrect: false,},
            {answerText: data.results[4].incorrect_answers[1], isCorrect: false,},
            {answerText: data.results[4].incorrect_answers[2], isCorrect: false,},
            {answerText: data.results[4].correct_answer, isCorrect: true,}
        ]
    },

]
  

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
      <>
        <div className='score-section'>You scored {score} out of {questions.length}</div>
        <button className='new-quiz-button' onClick={handleNewQuizClick}>New Quiz</button>
      </>
      ) : 
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
