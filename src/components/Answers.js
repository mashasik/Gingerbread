import React from 'react';

const Answers = ({questions, answers}) => {
  return (
    <div className="answers">
      <ol>
        {questions.map((quest, i) => {
          return (
            <li key={quest._id}>
              {quest.question} <strong>{answers[i]}</strong>
            </li>
          );  
        })}
      </ol>
    </div>
  );
}

export default Answers;