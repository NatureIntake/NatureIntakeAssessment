import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import SidebarContext from "../../components/context/SidebarContext";
import useMediaQuery from "../../components/hooks/useMediaQuery";
import { requireAuth } from "../utils/requireAuth";
import Qna2 from "../../components/QnA/Qna2.json";
import TestContext from "../../components/context/TestContext";
import FormContext from "../../components/context/FormContext";
import Cookies from "js-cookie";

export default function Quiz() {
  const Router = useRouter();
  const QuizId = Router.query.quizId;
  const { formData, isForm } = useContext(FormContext);

  const { Open } = useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  console.log('isForm', isForm)
  useEffect(() => {
    // const path = "/api/QuestionBank";

    fetch(`http://localhost:3000/api/getQuestion/4/${QuizId}/10`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("Questions", JSON.stringify(data));
        console.log('data', data)
        setQuestionState(data)
      });
  }, []);
  const getInitial = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = JSON.parse(window.localStorage.getItem("Questions"));

      return storedPrefs;
    }
  };
  const [QuestionState, setQuestionState] = useState([]);


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
    const nextQues = currentQuestion + 1;
    nextQues < QuestionState?.length && setCurrentQuestion(nextQues);
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < QuestionState?.length; i++) {
      QuestionState[i].options.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
    if (score >= (40 / QuestionState?.length) * 100) {
    }
  };

  function srink() {
    return Open ? "pl-[20rem] px-20" : "pl-[10rem] px-20 ";
  }

  return (
    <div
      className={` ${isLaptop && srink()} ${
        isTablet && "px-10"
      } px-2  mt-16 pt-10 min-h-screen min-w-screen  flex  justify-center`}
    >
      {/* main page */}

      <div
        className={`flex flex-col  w-screen  gap-12 pb-10 px-1 items-center
        ${isTablet && "gap-10 "} ${isLaptop && "gap-14  min-h-screen"} `}
      >
        <div
          className={`flex h-52   rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-end text-center  gap-4  w-full  ${
            isLaptop && "w-9/12"
          } 
            ${isTablet && "w-11/12"} 
           `}
        >
          <span
            className={` text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-9/12 rounded-xl shadow-sm  dark:theme-dark font-bold capitalize `}
          >
            UNit 1
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
                {(QuestionState?.length > 0) && QuestionState[currentQuestion]?.options?.map((answer, index) => (
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
                ))}
              </div>
              <div className='flex justify-between w-full mt-4 text-white px-5 gap-6 '>
                <button
                  onClick={handlePrevious}
                  className='w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md'
                >
                  Previous
                </button>
                <button
                  onClick={
                    currentQuestion + 1 === QuestionState?.length
                      ? handleSubmitButton
                      : handleNext
                  }
                  className='w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md'
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
    </div>
  );
}

export async function getServerSideProps(context) {
  return requireAuth(context, ({ session }) => {
    return {
      props: { session },
    };
  });
}