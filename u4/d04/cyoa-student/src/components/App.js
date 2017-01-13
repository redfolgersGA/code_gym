import React, { Component } from 'react';
import '../css/App.css';

import adventures from '../adventures';

import Choice from './Choice';
import End from './End';

class App extends Component {
  constructor(){
    super();
    this.state = {
      current_adventure: 0,
      adventures
    };
  }

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
    return(
      <div className="main-container" style={{ backgroundImage: 'url(' + data.image + ')' }}>
        <nav>
          <h1>
            <span className="title">ReactJS</span> Choose Your Own Adventure
          </h1>
        </nav>
        <div className="current-adventure">
           {text}
          <div className="choices">
          {this.showOptions(data.options) }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
