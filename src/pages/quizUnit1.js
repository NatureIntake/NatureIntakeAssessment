import React, { useContext } from "react";
import Quiz from "../components/quiz";
import QnaUnit1 from "../assests/QnA/QnaUnit1.json";
import TestContext from "../assests/context/TestContext";

export default function quizUnit1() {
  const { Unit1, setQuestionState } = useContext(TestContext);

  if (Unit1 !== 0) {
    return (
      <>
        {setQuestionState(QnaUnit1)}
        <Quiz />
      </>
    )
  }
}
