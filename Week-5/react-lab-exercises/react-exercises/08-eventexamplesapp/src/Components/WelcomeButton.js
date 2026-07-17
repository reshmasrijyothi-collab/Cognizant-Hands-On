import React, { Component } from 'react';

class WelcomeButton extends Component {
  sayWelcome = (message) => {
    alert(`Say ${message}`);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
      </div>
    );
  }
}

export default WelcomeButton;
