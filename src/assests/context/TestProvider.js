import React, { useState } from "react";
import TestContext from "./TestContext";
import QnaUnit1 from "../QnA/QnaUnit1.json";

const TestProvider = (props) => {
  const [Practice1, setPractice1] = useState(2);
  const [Practice2, setPractice2] = useState(1);
  const [Practice3, setPractice3] = useState(0);
  const [FinalTest, setFinalTest] = useState(0);
  const [ClassState, setClassState] = useState(1);
  const [QuestionState, setQuestionState] = useState(QnaUnit1);
  const [TestState, setTestState] = useState(Practice1);

  return (
    <TestContext.Provider
      value={{
        Practice1,
        setPractice1,
        Practice2,
        setPractice2,
        Practice3,
        setPractice3,
        FinalTest,
        setFinalTest,
        QuestionState,
        setQuestionState,
        TestState,
        setTestState,
        ClassState,
        setClassState,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
