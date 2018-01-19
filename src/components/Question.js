import React from 'react';

import Choices from './Choices';

const Question = ({current, onSelect}) => {
  const { question, choices } = current;

  return (
    <div className="quest">
      <h1>{ question }</h1>
      <Choices choices={choices}
        onSelect={onSelect} />
    </div>
  );
};

export default Question;