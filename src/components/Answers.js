import React from 'react';

const Answers = ({questions, answers, correctAnswers}) => {
  return (
    <div className="answers">
      <ol>
        {questions.map((quest, i) => {
          const isCorrect = correctAnswers && correctAnswers[i] === answers[i];

          return (
            <li key={quest._id}>
              {quest.question} <strong className={`${isCorrect ? 'success' : 'danger'}`}>
                {answers[i]}
              </strong>
              {(correctAnswers && !isCorrect) &&
              <span className="success"> {correctAnswers[i]}</span>}
            </li>
          );  
        })}
      </ol>
    </div>
  );
}

export default Answers;