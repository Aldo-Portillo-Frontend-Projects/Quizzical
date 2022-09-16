import './App.css';
import Question from './Question';

function App() {


  return (
    <div className="App">
      <Question key="0" questionNum="0" />
      <Question key="1" questionNum="1" />
      <Question key="2" questionNum="2" />
      <Question key="3" questionNum="3" />
      <Question key="4" questionNum="4" />
    </div>
  );
}

export default App;
