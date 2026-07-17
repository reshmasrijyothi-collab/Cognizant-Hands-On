import React, { Component } from 'react';

class ClickEvent extends Component {
  // React's synthetic event (e) is passed automatically to the handler
  handlePress = (e) => {
    console.log('Synthetic event:', e);
    alert('I was clicked');
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePress}>Press Me</button>
      </div>
    );
  }
}

export default ClickEvent;
