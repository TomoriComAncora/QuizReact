import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Questions.css";
import Options from "./Options";

function Questions() {
    const [quizState, dispatch] = useContext(QuizContext);

    const currentQuestions = quizState.questions[quizState.currentQuestions];
    console.log(quizState);
  return (
    <div id="questions">
        <p>Pergunta {quizState.currentQuestions + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestions.question}</h2>
        <div id="options-container">
            {currentQuestions.options.map((option)=>(
              <Options option={option} key={option}/>
            ))}
        </div>
        <button onClick={()=> dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )
}

export default Questions