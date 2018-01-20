import React from 'react';

import Choices from './Choices';

const Question = ({current, onSelect, loadNewQuestion}) => {
  const { question, choices } = current;

  return (
    <div className={`fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}>
      <h1>{ question }</h1>
      <Choices choices={choices}
        onSelect={onSelect} />
    </div>
  );
};

export default Question;