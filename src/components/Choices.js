import React from 'react';

import Button from './Button';

const Choices = ({choices}) => {
  return (
    <section className="choices">
      {
        choices.map((choice, index) =>
          <Button key={index} choice={choice} index={index} />
        )
      }
    </section>
  );
}

export default Choices;