import React, { useContext } from "react";
import { useRouter } from "next/router";
import Quiz from "../components/quizHandler";
import Qna1 from "../components/QnA/Qna1.json";
import TestContext from "../components/context/TestContext";

export default function QuizUnit1() {
  const { Unit1, setQuestionState } = useContext(TestContext);
const Router = useRouter()
QuizId = Router.query.
  if (Unit1 !== 0) {
    return (
      <>
        {setQuestionState(Qna1)}
        <Quiz value = "Practice-1" id =  />
      </>
    )
  }
}
