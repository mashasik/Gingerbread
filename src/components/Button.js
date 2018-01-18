import React, { Component } from 'react';

class Button extends Component {
  getLetter(index) {
    const letters = ['A', 'B', 'C'];
    return letters[index]
  }

  render() {
    const { choice, index } = this.props;

    return (
      <button className="btn btn-huge">
        <span className="letter">{this.getLetter(index)}</span> {choice}
      </button>
    );
  }
}

export default Button;