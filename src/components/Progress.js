import React from 'react';

const Progress = ({ total, progress }) => {
  return (
    <div className="progress">
      {progress} of {total} answered
    </div>
  );
}

export default Progress;