import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage';
import ListBooks from './ListBooks' ;
import { Route ,Routes } from 'react-router-dom';
class App extends Component {
  state = {
    books:[]
  }

//revoking BooksAPI as a backend server and push all the data to empty array called books 

async componentDidMount() {
 const books= await BooksAPI.getAll();
      this.setState({books});
    console.log(this.state.books)
}

 

//make a function that allows users to move books between shelves
updateShelf  = (book, shelf) => {
  BooksAPI.update(book, shelf);
  book.shelf = shelf;
  const books = this.state.books.filter((b) => b.id != book.id).concat(book);
  this.setState({ books });
};


  render() {
    return (
      <div className="app">
        <Routes>
    
    <Route  path='/'  element= {<ListBooks 
    books={this.state.books}
   
    updateShelf={this.updateShelf}
    />} />
     <Route path='/search' element={<SearchPage 
    books={this.state.books}
    updateShelf={this.updateShelf}
   
     />} />
     </Routes>
      </div>
    )
  }
}

export default App
