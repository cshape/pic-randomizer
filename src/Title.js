import React from 'react';
import App from './App.js';

export default class Title extends React.Component {
  constructor(props) {
  	super(props);
  }



  render() {
    return (
      <div>
       <button onClick={this.props.handleClick}>Click to Randomize</button>
      </div>
    );
  }
}
