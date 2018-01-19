import React from 'react';

import Button from './Button';

const Choices = ({choices, onSelect}) => {
  return (
    <section className="choices">
      {
        choices.map((choice, index) =>
          <Button key={index}
            choice={choice}
            index={index}
            onSelect={onSelect}
          />
        )
      }
    </section>
  );
}

export default Choices;