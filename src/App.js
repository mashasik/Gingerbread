import React, { Component, Fragment } from 'react';

import data from './data/Data';
import Question from './components/Question';
import Results from './components/Results';

import './css/Style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data.questions,
      current: data.questions[0],
      progress: 0,
      answers: [],
      loadNewQuestion: false,
      showResults: false,
      correctAnswers: null
    }

    this.onSelect = this.onSelect.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.onLoadResults = this.onLoadResults.bind(this);
  }

  onSelect(answer) {
    this.setState({
      answers: [...this.state.answers, answer]
    }, this.goToNextQuestion())
  }

  goToNextQuestion() {
    const { progress, questions } = this.state;

    this.setState({
      loadNewQuestion: true
    })

    setTimeout(() => {
      if (progress < questions.length - 1) {
        this.setState({
          progress: progress + 1,
          current: questions[progress + 1],
          loadNewQuestion: false
        })
      } else {
        this.setState({
          loadNewQuestion: false,
          showResults: true
        })
      }
    }, 300)
  }

  onLoadResults() {
    fetch('https://api.myjson.com/bins/zgpjb')
      .then(response => response.json())
      .then(parseJSON => {
        const correctAnswers = parseJSON.correctAnswers;

        this.setState({ correctAnswers })
      })
      .catch(error => {
        console.log('Fail', error);
      })
  }
  
  render() {
    const { current, loadNewQuestion, showResults, questions, answers, correctAnswers } = this.state;

    return (
      <Fragment>
        <header>
          <img className={`fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}
            src="https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg" />
        </header>

        <article className={`content`}>
          <div className="progress">
            1 of 5 answered
          </div>
          {
            !showResults ? <Question
              current={current}
              onSelect={this.onSelect}
              loadNewQuestion={loadNewQuestion}
            /> : <Results
              loadNewQuestion={loadNewQuestion}
              answers={answers}
              questions={questions}
              onLoadResults={this.onLoadResults}
              correctAnswers={correctAnswers}
            />
          }
        </article>
      </Fragment>
    );
  }
}

export default App;