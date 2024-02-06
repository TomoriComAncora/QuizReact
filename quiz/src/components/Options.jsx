import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Options.css"

function Options({option}) {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="option">
        <p>{option}</p>
    </div>
  )
}

export default Options