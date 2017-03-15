import React, { Component } from 'react';
import ForumHeader from './ForumHeader.react'

import ForumDispatcher from '../dispatcher/ForumDispatcher';

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          name: 'user 1'
        },
        {
          name: 'user 2'
        },
        {
          name: 'user 3'
        }
      ]
    }
  }
  render(){
    return (
      <div>
        <ForumHeader users={this.state.users} name="Kevin Alviola"/>
        <h1>Forum Section</h1>
      </div>
    );
  }
}