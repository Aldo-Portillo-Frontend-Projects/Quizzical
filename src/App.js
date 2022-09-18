import './App.css';

function App() {

  
  return (
    <>
    <div className='question-section'>
      <div className='question-count'>
        <span>Question 0</span>/{/*questions.length*/}
      </div>
      <div className='question-text'>Question ?</div>
    </div>
    <div className='answer-section'>
      <button>Answer 1</button>
      <button>Answer 2</button>
      <button>Answer 3</button>
      <button>Answer 4</button>
    </div>
    </>
  );
}

export default App;
