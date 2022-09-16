import React, {useContext} from "react";
import Quiz from "../components/quiz";
import QnaUnit3 from "../components/QnA/Qna3.json";
import TestContext from "../components/context/TestContext";

export default function QuizUnit3() {
  const {Unit3, setQuestionState } = useContext(TestContext);

  if (Unit3 !== 0) {
    return (
      <>
        {setQuestionState(QnaUnit3)}
        <Quiz value = "Practice-3"/>
      </>
    )
  }
}
