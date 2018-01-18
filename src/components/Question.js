import React from 'react';

import Choices from './Choices';

const Question = ({current}) => {
  const { question, choices } = current;

  return (
    <div className="quest">
      <h1>{ question }</h1>
      <Choices choices={choices} />
    </div>
  );
};

export default Question;