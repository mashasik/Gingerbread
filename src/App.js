import React, { Component, Fragment } from 'react';

import './css/Style.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg" />
        </header>

        <article className={`content`}>

          <div className="progress">
            1 of 5 answered
          </div>

          <div className={`question`}>
            <h1>What is the best city in the world?</h1>
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