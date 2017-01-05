import React, { Component } from 'react';

class EnemyName extends Component {
  render() {
    return (
      <div>
      <h1> Enemy </h1>
      <h2>{this.props.enemyname}</h2>


      </div>

      )
  }
}


export default EnemyName;
