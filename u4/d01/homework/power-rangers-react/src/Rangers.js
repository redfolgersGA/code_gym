import React, {Component} from 'react';

class Rangers extends Component {
  render() {
    return (
      <div>
      <ul id="Controller">
        <li><button onClick={() => this.props.updateState("White")}>White Ranger</button></li>
        <li><button onClick={() => this.props.updateState("Green")}>Green Ranger</button></li>
        <li><button onClick={() => this.props.updateState("Red")}>Red Ranger</button></li>

    </ul>
    </div>
    )
  }
}

export default Rangers
