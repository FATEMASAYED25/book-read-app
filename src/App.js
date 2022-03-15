import React, { Component } from 'react';
 import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage';
import ListBooks from './ListBooks' ;
import { Route ,Routes } from 'react-router-dom';
class App extends Component {
  state = {
    books:[],
 
   
  }

//revoking BooksAPI as a backend server and push all the data to empty array called books 

async componentDidMount() {
 const books= await BooksAPI.getAll();
      this.setState({books});
    console.log(this.state.books)
}

 search = (query) => { 
  const books= BooksAPI.search(query);
  this.setState({books});
 
 }

updateShelf = (book,shelf) => { 
  const books= BooksAPI.update(book,shelf);
  this.setState({books});

 }

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
     search={this.search}
     />} />
     </Routes>
      </div>
    )
  }
}

export default App
