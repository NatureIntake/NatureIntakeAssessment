import React, {useContext} from "react";
import Quiz from "../components/quiz";
import QnaUnit2 from "../assests/QnA/QnaUnit2.json";
import TestContext from "../assests/context/TestContext";



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
