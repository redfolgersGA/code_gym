import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
          <h1 style={{fontFamily: "Pacifico"}}>Redux Blawwg</h1>
        </Link>
<<<<<<< HEAD
        { this.props.children }

=======
>>>>>>> c874d43f878c28f46e21e8448880b0b0beca6b39

      </div>
    );
  }
}

export default App;
