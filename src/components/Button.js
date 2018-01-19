import React, { Component } from 'react';

class Button extends Component {
  getLetter(index) {
    const letters = ['A', 'B', 'C'];
    return letters[index]
  }

  handleClick(e) {
    this.button.classList.add('is-selected', 'is-highlighted');

    setTimeout((e) => {
      this.props.onSelect(this.props.choice);
    }, 500)
  }

  render() {
    const { choice, index, onSelect } = this.props;

    return (
      <button className="btn btn-huge"
        ref={(input) => this.button = input}
        onClick={(e) => this.handleClick(e)} >
        <span className="letter">{this.getLetter(index)}</span> {choice}
      </button>
    );
  }
}

export default Button;