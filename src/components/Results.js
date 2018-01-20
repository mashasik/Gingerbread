import React from 'react';
import Answers from './Answers';

const Results = ({questions, answers}) => {
  return (
    <div className="results">
      <h1>Here are your answers:</h1>
      <Answers answers={answers} questions={questions} />
      <button className="btn btn-dark">Submit</button>
    </div>
  );
}

export default Results;