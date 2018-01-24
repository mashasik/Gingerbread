import React from 'react';
import Answers from './Answers';

const Results = ({questions, answers, onLoadResults, correctAnswers}) => {
  return (
    <div className="results">
      <h1>Here are your answers:</h1>
      <Answers answers={answers}
        questions={questions}
        correctAnswers={correctAnswers} />
      <button className="btn btn-dark" onClick={onLoadResults}>
        Submit
      </button>
    </div>
  );
}

export default Results;