import React, { useContext } from "react";
import Quiz from "../components/quiz";
import Qna1 from "../components/QnA/Qna1.json";
import TestContext from "../components/context/TestContext";

export default function quizUnit1() {
  const { Unit1, setQuestionState } = useContext(TestContext);

  if (Unit1 !== 0) {
    return (
      <>
        {setQuestionState(Qna1)}
        <Quiz value = "Practice-1" />
      </>
    )
  }
}
