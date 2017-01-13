import React, { Component } from 'react';
import {sep, plabeled} from './helpers.jsx';
import './App.css';



class CTest extends Component {
  constructor(props){
    super(props);
    sep();
    console.log('In CTest constructor. Receiving these props: ');
    console.log(props);

  }

  componentWillUpdate(nextProps, nextState){
    sep();
    console.log("In CTest componentWillUpdate.");
    plabeled("nextProps", nextProps);
    plabeled("nextState", nextState);
  }

  render(){
    return(
	<div>{this.props.content}</div>
    );
  }
}

class App extends Component {

  constructor(props){
    super(props);
    console.log('------------------------------------------------------------');
    console.log('In App constructor. Receiving these props: ');
    console.log(props);
    this.state = {clickNum: 0};//initializing the state
    this.state = {clickNum: 0,
                 running: false
                 intervalID: null};



 //    setInterval(
 //      ()=>{this.setState(
 //        {clickNum: this.state.clickNum + 1}
 // );},
 //  1000);

  }

//we have an arrow function and attaching it aas an onclick handler to a
//button when we click it itll trigger the callback we are also passing
//down props to Ctest component that is a child component
//the nice thing about arrow fucntions is that they inherit whatver this
//was in the scop in whichj is was created
//the button triggers the function the function sets the state
//to this.state.clickNum
  render() {
    const stopTimer = ()=>{
      if(this.state.intervalID != null){
        clearInterval(this.state.intervalID);
        this.setState({running: false});


      }
    };

    const startTimer = () => {
      if(!this.state.running){
      const intervalId = setInterval(
      () => this.setState(
        {clickNum: this.state.clickNum + 1}
        ),
        1000
        );
      this.setState({running: true,
                      intervalID: intervalID});
    }
    };



    const clickhandler = (e)=>{
      // console.log('entering clickhandler state');
      // console.log(this.state);

      this.setState(
	   {clickNum: this.state.clickNum + 1}
      );
      // console.log('state');
      // console.log(this.state);

    };
    return (
      <div className="App">
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
	<p>{'clickNum:'} {this.state.clickNum}</p>
	<button onClick={clickhandler}>click me</button>
	<p>{'CTest:'}</p>
	<CTest content={"Here is some content for CTest: " + this.state.clickNum}/>
      </div>
    );
  }
}

export default App;
