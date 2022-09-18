import React, { useEffect, useState } from "react";
import TestContext from "./TestContext";
import Cookies from "js-cookie";
const TestProvider = (props) => {
  const [UnitTest1, setUnitTest1] = useState(0);
  const [UnitTest2, setUnitTest2] = useState(0);
  const [UnitTest3, setUnitTest3] = useState(0);
  const [FinalTest, setFinalTest] = useState(0);
  const [ClassState, setClassState] = useState(1);

  // const [TestState, setTestState] = useState(Practice1);
  let id;

  useEffect(() => {
    id = JSON.parse(Cookies.get("userId"));
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3000/api/getState/${id}`);
      const data = await res.json();
      console.log("data", data);
      // setUnitTest1(data.unitTest_1);
      // setUnitTest2(data.unitTest_2);
      // setUnitTest3(data.unitTest_3);
      // setFinalTest(data.finalTest_1);
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

        // TestState,
        // setTestState,
        ClassState,
        setClassState,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
