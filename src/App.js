import React, { Component } from 'react';
 import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage';
import ListBooks from './ListBooks' ;
import { Route ,Routes } from 'react-router-dom';
class App extends Component {
  state = {
    books:[],
    allBooks:[]
   
  }

//revoking BooksAPI as a backend server and push all the data to empty array called books 

componentDidMount() {
  BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  
}



  render() {
    return (
      <div className="app">
        <Routes>
    
    <Route  path='/'  element= {<ListBooks books={this.state.books} />} />
     <Route path='/search' element={<SearchPage/>} />
     </Routes>
      </div>
    )
  }
}

export default App
