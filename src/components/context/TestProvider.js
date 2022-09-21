import React, { useEffect, useState } from "react";
import TestContext from "./TestContext";
import { useSession } from "next-auth/react";
import { BASE_URL } from "../utils/BASE_URL";

const TestProvider = (props) => {
  const { data: session } = useSession();
  const [UnitTest1, setUnitTest1] = useState("");
  const [UnitTest2, setUnitTest2] = useState("");
  const [UnitTest3, setUnitTest3] = useState("");
  const [FinalTest, setFinalTest] = useState("");
  const [UnitScore1, setUnitScore1] = useState("");
  const [UnitScore2, setUnitScore2] = useState("");
  const [UnitScore3, setUnitScore3] = useState("");
  const [FinalScore, setFinalScore] = useState("");
  const isSession = session ? true : false;

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("userId"));
    if (id) {
      async function fetchState() {
        const res = await fetch(`${process.env.baseUrl}/api/getState/${id}`);
        const data = await res.json();
        setUnitTest1(data[0].unitTest_1);
        setUnitTest2(data[0].unitTest_2);
        setUnitTest3(data[0].unitTest_3);
        setFinalTest(data[0].finalTest_1);
      }
      async function fetchScore() {
        const res = await fetch(`${process.env.baseUrl}/api/getScore/${id}`);
        const data = await res.json();
        setUnitScore1(data[0].unitTest_1_score);
        setUnitScore2(data[0].unitTest_2_score);
        setUnitScore3(data[0].unitTest_3_score);
        setFinalScore(data[0].finalTest_1_score);
        console.log(data);
      }
      fetchState();
      fetchScore();
    }
  }, []);

  return (
    <TestContext.Provider
      value={{
        UnitTest1,
        UnitTest2,
        UnitTest3,
        FinalTest,
        UnitScore1,
        UnitScore2,
        UnitScore3,
        FinalScore,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
