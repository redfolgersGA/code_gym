import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import rooms from './rooms.js'

class RoomShow extends Component {

  constructor(props){
    super(props);
    //this.state = {
     // rooms,
      //currentRoom: this.rooms[this.props.params.roomName]
    //}
  }

  static contextTypes = {
    router: PropTypes.object
  }

  render(){
    const imageStyles = { maxWidth: '500px' }
    const currentRoom = this.props.params.roomName;
    const { name, image, description, nextRoom } = rooms[currentRoom];//this.state.currentRoom;
    return (
      <div className="room_show">
        <img style={ imageStyles } alt="room" src={image} />
        <h3>{ name }</h3>
        <p>{ description }</p>
        <Link to={`/rooms/${nextRoom}`}> Next Room </Link>
      </div>
    );
  }
}

export default RoomShow;
