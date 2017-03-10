import React, { Component } from 'react';

export default class ForumHeader extends Component {
  render(){
    console.log('users', this.props.users);
    console.log('name', this.props.name);
    return(
      <div>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}