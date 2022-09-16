import React, {useContext} from "react";
import Quiz from "../components/quiz";
import QnaUnit2 from "../components/QnA/Qna2.json";
import TestContext from "../components/context/TestContext";



export default function QuizUnit2() {
  const {Unit2, setQuestionState } = useContext(TestContext);

  if (Unit2 !== 0) {
    return (
      <>
        {setQuestionState(QnaUnit2)}
        <Quiz value = "Practice-2"/>
      </>
    )
  }
}
