import React, { Component } from 'react';
import '../css/App.css';

import adventures from '../adventures';

<<<<<<< HEAD
import Choice from './Choice';
import End from './End';
=======
// import Choice from './Choice';
// import Lose from './Lose';
>>>>>>> c874d43f878c28f46e21e8448880b0b0beca6b39

class App extends Component {
  constructor(){
    super();
    this.state = {
<<<<<<< HEAD
      current_adventure: 0,
=======
>>>>>>> c874d43f878c28f46e21e8448880b0b0beca6b39
      adventures
    };
  }

<<<<<<< HEAD
  changeAdventure(to){

    this.setState({
      current_adventure: to
    });

   }

  resetGame(){ }

  showOptions(options){
    if(options){
    return options.map((option, index) => {
      return (
        <Choice
       changeAdventure={this.changeAdventure.bind(this)}
       key={index}
       details={options}
       />
       );
    });
  } else {
    console.log('no options')
   }
  }

  render() {
    const { adventures, current_adventure } = this.state;
    const data = adventures[this.state.current_adventure]; // hard-coded adventure
    const text = data.text.split("\n").map((el, i) => {

      return (<p key={i}> {el}</p>);
    });
=======
  changeAdventure(to){ }

  resetGame(){ }

  showOptions(options){ }

  render() {
    const data = this.state.adventures[0]; // hard-coded adventure

>>>>>>> c874d43f878c28f46e21e8448880b0b0beca6b39
    return(
      <div className="main-container" style={{ backgroundImage: 'url(' + data.image + ')' }}>
        <nav>
          <h1>
            <span className="title">ReactJS</span> Choose Your Own Adventure
          </h1>
        </nav>
        <div className="current-adventure">
<<<<<<< HEAD
           {text}
          <div className="choices">
          {this.showOptions(data.options) }
=======
          Lorem Ipsum Dolor Sit.
          <div className="choices">
>>>>>>> c874d43f878c28f46e21e8448880b0b0beca6b39
          </div>
        </div>
      </div>
    );
  }
}

export default App;
