import React, { Component } from 'react';

class Like extends Component {
  render(){
    return(
      <div>
        {this.props.like}
      </div>
    )
  }
}

export default Like;
