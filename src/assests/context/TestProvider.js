import React, { useState } from "react";
import TestContext from "./TestContext";
import  QnaUnit1 from "../QnA/QnaUnit1.json"

const TestProvider = (props) => {

  const [Unit1, setUnit1] = useState(1);
  const [Unit2, setUnit2] = useState(1);
  const [Unit3, setUnit3] = useState(0);
  const [FinalUnit, setFinalUnit] = useState(0);

  const [QuestionState, setQuestionState] = useState(QnaUnit1);

 
  return (
    <TestContext.Provider value={{Unit1, setUnit1, Unit2, setUnit2,Unit3, setUnit3, FinalUnit, setFinalUnit, QuestionState, setQuestionState }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
