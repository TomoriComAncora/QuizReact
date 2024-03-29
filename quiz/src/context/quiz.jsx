import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestions: 0,
  score: 0,
};

const quizReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      const reorderQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderQuestions,
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestions + 1;

      let endGame = false;

      if(!questions[nextQuestion]){
        endGame = true;
      }
      return {
        ...state,
        currentQuestions: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
      };

    case "NEW_GAME":
      return initialState;
      
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
