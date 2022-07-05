import React, {useContext} from "react";
import Quiz from "../components/quiz";
import QnaUnit3 from "../assests/QnA/QnaUnit3.json";
import TestContext from "../assests/context/TestContext";

export default function quizUnit3() {
  const {Unit3, setQuestionState } = useContext(TestContext);

  if (Unit3 !== 0) {
    return (
      <>
        {setQuestionState(QnaUnit3)}
        <Quiz/>
      </>
    )
  }
}
