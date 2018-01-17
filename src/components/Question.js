import React from 'react';

const Question = ({current}) => {
  const { question } = current;

  return (
    <div className="quest">
      <h1>{ question }</h1>
      <section className="choices">
        <button className="btn btn-huge">
          <span className="letter">A</span> Melbourne
        </button>
        <button className="btn btn-huge">
          <span className="letter">B</span> New York
        </button>
        <button className="btn btn-huge">
          <span className="letter">C</span> London
        </button>
      </section>
    </div>
  );
};

export default Question;