import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div className="Name">
      <h2>Name: {this.props.name}</h2>
      <h2>Color: {this.props.color}</h2>

      </div>

      )
  }
}


export default Name;
