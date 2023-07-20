import React from "react";
import { useAppContext } from "../context/QuizContext";
import "bootstrap/dist/css/bootstrap.min.css";

export const Card = () => {
  const { Questions } = useAppContext();
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswer(null);
  };

  const handleCheckAnswer = (e) => {
    
    if (e.target.value === Questions[questionIndex].correctAnswer) {
        setSelectedAnswer(true);
      } else {
        setSelectedAnswer(false);
      }
  };

  const getButtonClassName = () => {
    if (selectedAnswer === null) {
      return "btn btn-primary";
    } else if (selectedAnswer) {
      return "btn btn-success";
    } else if (!selectedAnswer) {
      return "btn btn-danger";
    } else {
      return "btn btn-primary";
    }
  };

  const handleTryAgain = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
  };

  return (
    <div className="row">
      {questionIndex <= Questions.length - 1 ? (
        <div className="col-lg-12">
          <h2>{Questions[questionIndex].question}</h2>
          <div className="answers card">
            {Questions[questionIndex].answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className={getButtonClassName()}
                  value={answer}
                  onClick={handleCheckAnswer}
                  disabled={selectedAnswer !== null}
                >
                  {answer}
                </button>
              );
            })}
          </div>
          {selectedAnswer && (
            <button onClick={handleNextQuestion} className="btn btn-success">
              Next Question
            </button>
          )}

          {selectedAnswer === false && (
            <React.Fragment>
            <button onClick={handleTryAgain} className="btn btn-danger">
              Try Again
            </button>
            <div className="alert alert-danger" role="alert">
          You are Lose!!!
           </div>
            </React.Fragment>
          )}
        </div>
      ) : (
        <div className="alert alert-success" role="alert">
          You answered all the questions!!!
        </div>
      )}
    </div>
  );
};
