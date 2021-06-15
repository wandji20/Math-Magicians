/* eslint-disable */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick = (value)=>{
    console.log(value)
  }
  render() {
    return (
      <div className="container">
        <Display />
        <ButtonPanel handleClick = {(value) => {this.handleClick(value)}} />
    </div>
    )
  }
}

