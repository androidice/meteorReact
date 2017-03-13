import React, { Component } from 'react';

export default class ForumHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        name:'Kevin Alviola'
      }
    };
  }
  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <span>User: {this.state.user.name}</span>
      </div>
    )
  }
}