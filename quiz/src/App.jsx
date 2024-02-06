import { useContext, useEffect } from 'react';
// componente
import Welcome from './components/Welcome'
import Questions from './components/Questions';
import { QuizContext } from './context/quiz';

// estático
import './App.css'
import GameOver from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=>{
    // randomizar as perguntas
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])
  return (
    <div className="App">
      <h1>Quiz app</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
