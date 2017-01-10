import React, { Component } from 'react';
import BookList from './book-list';
import BookDetail from './book-detail';

export default class App extends Component {
  componentWillMount = () => {
    this.setState({
      currentBook: null
    })
  }
  
  render() {

    // pass the selectBook function as props down to the bookList component once you're ready
    return (
      <div>
        <BookList selectBook={this.selectBook.bind(this)} />

        <BookDetail book={this.state.currentBook}/>
      </div>
    );
  }

  selectBook = (book) => {
    this.setState({
      currentBook: book
    })
  }
}
