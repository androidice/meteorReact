import React, { Component } from 'react';

export default class ForumHeader extends Component {
  render(){
    console.log('users', this.props.users);
    return(
      <h1>
        Forum Header
      </h1>
    )
  }
}