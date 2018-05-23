import React from 'react';
import App from './App.js';
import Title from './Title.js'
import PicStyle from './PicStyle.css'

export default class Pic extends React.Component {
  render() {
    return (
      <div>
      	<img alt ={this.props.pic} src={ require("./" + this.props.pic + ".jpg") } />
      </div>
    );
  }
}