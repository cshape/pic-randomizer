import React from 'react';
import Title from './Title.js';
import Pic from './Pic.js'
import PicStyle from './PicStyle.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  let newPic = Math.floor(Math.random() * 10);
  this.setState({
    pic: newPic
  })
}


  render() {
    return (
      <div className="App">
       <Title handleClick={this.handleClick} />
       <Pic pic = {this.state.pic}/>
      </div>
    );
  }
}
