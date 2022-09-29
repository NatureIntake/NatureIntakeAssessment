import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { requireAuth } from "../../components/utils/requireAuth";
import useMediaQuery from "../../components/hooks/useMediaQuery";
import TestContext from "../../components/context/TestContext";
import SidebarBehave from "../../components/utils/sidebarBehave";

export default function Quiz({ session }) {
  const Router = useRouter();
  const QuizId = Router.query.quizId;
  const { FinalTestChance } = useContext(TestContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [QuestionState, setQuestionState] = useState([]);

  useEffect(() => {
    if(QuizId === 4){
      if(FinalTestChance <= 0)
        Router.push("/") 
    }
  }, [])
  
  useEffect(() => {
    const getQuestionLength = () => {
      return QuizId > 3 ? 20 : 15;
    };
    const form = JSON.parse(localStorage.getItem("formData"));
    
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/getQuestion/${form[0]?.class}/${QuizId}/${getQuestionLength()}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestionState(data);
      });
  }, []);

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
   
    if(selectedOptions[currentQuestion]){
      const nextQues = currentQuestion + 1;
      nextQues < QuestionState?.length && setCurrentQuestion(nextQues);
    }
  };

  const handleSubmitButton = async () => {
    if(selectedOptions[currentQuestion]){
    let newScore = 0;
    for (let i = 0; i < QuestionState?.length; i++) {
      QuestionState[i].options.map(
        (answer) =>{
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          newScore++
        }
      );
    }
    setScore(newScore);
    setShowScore(true);
    
    
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateScore/${session.user.id}`, {
      method: "PUT",
      body: JSON.stringify(getScore(newScore)),
    });
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/updateState/${session.user.id}`, {
      method: "PUT",
      body: JSON.stringify(getState(newScore)),
    });
  }
  };
  const getScore = (newScore) => {
    if (QuizId === "1") return { unitTest_1_score: newScore.toString() };
    else if (QuizId === "2") return { unitTest_2_score: newScore.toString() };
    else if (QuizId === "3") return { unitTest_3_score: newScore.toString() };
    else if (QuizId === "4") return { finalTest_1_score: newScore.toString() };
  };

  const getState = (newScore) => {
    if (QuizId === "1") return { unitTest_1: scoreState(newScore) , unitTest_2: testState(newScore)};
    else if (QuizId === "2") return { unitTest_2: scoreState(newScore), unitTest_3: testState(newScore) };
    else if (QuizId === "3") return { unitTest_3: scoreState(newScore), finalTest_1: testState(newScore) };
    else if (QuizId === "4") return { finalTest_1: scoreState(newScore), finalTestChance :  FinalTestChance -1};
  };

  const scoreState = (score) => {
    if ((score / QuestionState?.length) * 100 >= 40) return "2";
    else return "3";
  };
  const testState = (score) => {
    if (scoreState(score) === "2") return "0";
    else return "1";
  };

  return (
    <SidebarBehave>
      {/* main page */}

      <div
        className={`flex flex-col  w-screen  gap-12 pb-10 px-1 items-center
        ${isTablet && "gap-10 "} ${isLaptop && "gap-14  min-h-screen"} `}
      >
        <div
          className={`flex h-52   rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-center text-center  gap-4  w-full  ${
            isLaptop && "w-9/12"
          } 
            ${isTablet && "w-11/12"} 
           `}
        >
          <span
            className={` text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-9/12 rounded-xl shadow-sm  dark:theme-dark font-bold capitalize `}
          >
            {QuizId <= 3 ? `Unit- ${QuizId}` : "Final-Test"}
          </span>
        </div>
        {showScore ? (
          <div>
            <span className='w-6/12 text-3xl font-semibold text-center text-skin-base rounded-2xl bg-skin-dull dark:theme-dark p-5'>
              You scored {score} out of {QuestionState?.length}
            </span>
          </div>
        ) : (
          <>
            <div className='flex flex-col gap-8 p-10 rounded-xl shadow-sm  bg-skin-base dark:bg-gradient-to-r from-[#222222] to-[#1a1a1a]'>
              <div
                className={`flex flex-col items-center rounded-xl border-2 border-skin-base bg-skin-muted dark:theme-dark px-10 py-5`}
              >
                <span className='px-10 py-5 text-xl text-skin-muted rounded-2xl bg-skin-dull dark:theme-dark'>
                  Question {currentQuestion + 1} of {QuestionState?.length}
                </span>
                <div
                  className={`mt-4 text-md md:text-xl text-center text-skin-base dark:theme-dark`}
                >
                  {QuestionState[currentQuestion]?.question}
                </div>
              </div>
              <div className='flex flex-col w-full '>
                {QuestionState?.length > 0 &&
                  QuestionState[currentQuestion]?.options?.map(
                    (answer, index) => (
                      <div
                        key={index}
                        className='flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-skin-muted rounded-2xl bg-skin-muted dark:theme-dark shadow-sm hover:bg-skin-btn-hover-muted'
                        onClick={(e) => handleAnswerOption(answer.answer)}
                      >
                        <input
                          type='radio'
                          name={answer.answer}
                          value={answer.answer}
                          checked={
                            answer.answer ===
                            selectedOptions[currentQuestion]?.answerByUser
                          }
                          onChange={(e) => handleAnswerOption(answer.answer)}
                          className='w-6 h-6 bg-black'
                        />
                        <p className='ml-6 text-skin-base '>{answer.answer}</p>
                      </div>
                    )
                  )}
              </div>
              <div className='flex justify-between w-full mt-4 text-white px-5 gap-6 '>
                <button
                  onClick={handlePrevious}
                  className={`${ currentQuestion !== 0 ? "" : "opacity-50 cursor-not-allowed"} w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md`}
                >
                  Previous
                </button>
                <button
                  onClick={            
                      currentQuestion + 1 === QuestionState?.length
                        ? handleSubmitButton
                        : handleNext   
                  }
                  className={`${ selectedOptions[currentQuestion] ? "" : "opacity-50 cursor-not-allowed"} w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md`}
                >
                  {currentQuestion + 1 === QuestionState?.length
                    ? "Submit"
                    : "Next"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      </SidebarBehave>
  );
}

export async function getServerSideProps(context) {
  return requireAuth(context, ({ session }) => {
    return {
      props: { session },
    };
  });
}
