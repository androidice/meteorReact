import React, { Component } from 'react';
import Forum from './Forum.react'

export default  class App extends Component {
  render(){
    return(
      <div className="header-class">
        <h1>Hello world React</h1> <br/>
        <span id="some-id">It is a long established fact that a reader will be distracted by the <br/>
          readable content of a page when looking at its layout. The point of using <br/>
          Lorem Ipsum is that it has a more-or-less normal distribution of letters,<br/>
          as opposed to using 'Content here, content here', making it look like readable English.<br/>
          Many desktop publishing packages and web page editors now use <br/>
          Lorem Ipsum as their default model text, and a search for 'lorem ipsum' <br/>
          will uncover many web sites still in their infancy. Various versions have evolved over the years,<br/>
          sometimes by accident, sometimes on purpose (injected humour and the like).</span>
        <div id="forurm section">
          <Forum/>
        </div>
      </div>
    );
  }
}