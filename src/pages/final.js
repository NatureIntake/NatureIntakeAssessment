import React, {useContext} from "react";
import Quiz from "../components/quiz";
import QnaFT from "../components/QnA/QnaFT.json";
import TestContext from "../components/context/TestContext";


export default function QuizFT() {
  const {FinalUnit, setQuestionState } = useContext(TestContext);

  if (FinalUnit !== 0) {
    return (
      <>
        {setQuestionState(QnaFT)}
        <Quiz value = "Final-Test"/>
      </>
    )
  }
}
