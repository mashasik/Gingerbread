import React, { Component, Fragment } from 'react';

import data from './data/Data';
import Question from './components/Question';

import './css/Style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data.questions,
      current: data.questions[0],
      progress: 0,
      answers: []
    }
  }
  
  render() {
    const { current } = this.state;

    return (
      <Fragment>
        <header>
          <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg" />
        </header>

        <article className={`content`}>

          <div className="progress">
            1 of 5 answered
          </div>

          <Question current={current} />

          <div className="results">
            <h1>Here are your answers:</h1>
            <button className="btn btn-dark">Submit</button>
          </div>

        </article>
      </Fragment>
    );
  }
}

export default App;