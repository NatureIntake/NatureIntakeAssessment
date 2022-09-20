import React, { useEffect, useState } from "react";
import TestContext from "./TestContext";

const TestProvider = (props) => {
  const [UnitTest1, setUnitTest1] = useState("");
  const [UnitTest2, setUnitTest2] = useState("");
  const [UnitTest3, setUnitTest3] = useState("");
  const [FinalTest, setFinalTest] = useState("");
  const [ClassState, setClassState] = useState("");

  let id;

  useEffect(() => {
    id = JSON.parse(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3000/api/getState/${id}`);
      const data = await res.json();
      setUnitTest1(data[0].unitTest_1);
      setUnitTest2(data[0].unitTest_2);
      setUnitTest3(data[0].unitTest_3);
      setFinalTest(data[0].finalTest_1);
    }
    fetchData();
  }, []);

  return (
    <TestContext.Provider
      value={{
        UnitTest1,
        UnitTest2,
        UnitTest3,
        FinalTest,

        ClassState,
        setClassState,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
