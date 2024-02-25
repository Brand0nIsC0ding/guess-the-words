import React, { Component } from 'react';
import '../styles/Game.css';

class Keyboard extends Component {

  componentDidMount() {
    window.addEventListener("keyup", (e) => {
      if (this.props.alphabet.indexOf(e.key) !== -1) {
        this.props.action(e.key);
      }
    });
  }

  render() {
    return (
      <div id="keyboard">
        {this.props.alphabet.map((letter, key) => (
          <button
            key={"keyboard_" + key}
            onClick={() => this.props.action(letter)}
            className={this.props.usedLetter.indexOf(letter) !== -1 ? "used" : ""}
          >
            {letter}
          </button>
        ))}
      </div>
    );
  }
}

export default Keyboard;
