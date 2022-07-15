import React, {useContext} from "react";
import Quiz from "../components/quiz";
import QnaFT from "../assests/QnA/QnaFT.json";
import TestContext from "../assests/context/TestContext";


export default function quizFT() {
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
