import React, { Component } from 'react';
import './App.css';
import Name from './Name';
import About from './About';
import EarlyLife from './EarlyLife'
import EnemyName from './EnemyName';
import Rangers from './Rangers';

class App extends Component {
  constructor() {
    super();
    this.newRangerState = this.updateState.bind(this);
    this.state = {
      name: name,
      about: "",
      earlylife: "",
      enemyname: "",
      image: ""

    }
  }

  updateState(ranger){
    if (ranger === "White"){
      this.setState({
        name: "Tommy Oliver",
        white: "White Ranger",
        about: "This is the awesome white ranger. My favorite Power Ranger",
        earlylife: "Before he was a ranger he wanted to play pro football",
        enemyname: "Rita Repulsa",
        image: "http://i.imgur.com/7UiJ2bO.jpg"
      })
    } else if (ranger === "Green"){
      this.setState({
        name: "Tommy Oliver",
        color: "Green Ranger",
        about: "Was good but then got a bad case of roid rage and became evil",
        earlylife: "Trained natural but then started juicing",
        enemyname: "Lord Zed",
        image: "http://i.imgur.com/TLqtuzY.jpg"
      })
    } else if (ranger === "Red"){
      this.setState({
        name: "Jason",
        color: "Red Ranger",
        about: "The red ranger was the coolest til Tommy came along",
        earlylife: "All American, possibly taking Tommy's roids",
        enemyname: "Tommy Oliver",
        image: "http://i.imgur.com/dDjAiin.jpg"
      })
    }
  }

  render() {
    return (
      <div className="Power-rangers-react">

        <h1> IT's MORPHIN' TIME!!! </h1>
        <h2> Choose your Ranger! </h2>
        <Name color={this.color} name={this.state.name}/>
        <About about={this.state.about} />
        <EarlyLife earlylife={this.state.earlylife} />
        <EnemyName enemyname={this.state.enemyname} />
        <Image imageSrc={this.state.image} />
        <Rangers updateState={this.updateState} />


      </div>
    );
  }
}

export default App;
