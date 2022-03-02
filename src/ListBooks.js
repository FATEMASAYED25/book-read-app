import React, { Component } from 'react'
import {Link} from "react-router-dom";

class ListBooks extends Component {
state ={
  shelf:'',
  bookId:'',
  currentRead:[],
  wantRead:[],
  read:[]
}


 handler=(e)=>{
   this.setState({
    bookId:e.currentTarget.value
    })
    //get the target book 
const book1=e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement;
//make many actions related to the bookid when click on the option
switch(this.state.bookId){

  case "currentlyReading": this.state.currentRead.push(book1) ;
  break;
  
  
  case  "wantToRead": this.state.wantRead.push(book1);
  break;
  
  
  case  "read":  this.state.read.push(book1);
  break;
  
 
  
  }


 }
 
    render() {
      const {books}=this.props
              return (
         
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf" id="currentlyReading">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map(book =>{return(
                      <li key={book.id}>
                        <div className="book" id={this.state.bookId} >
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193,backgroundImage: `url(${book.imageLinks})` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move">Move to...</option>
                                <option value="currentlyReading" onClick={this.handler}>Currently Reading</option>
                                <option value="wantToRead" onClick={this.handler}>Want to Read</option>
                                <option value="read" onClick={this.handler}>Read</option>
                                <option value="none" onClick={this.handler}>None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                )})}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf" id='wantToRead'>
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.map(book =>{return(
                      <li key={book.id}>
                        <div className="book" id={this.state.bookId}>
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks})` }}></div>
                            <div className="book-shelf-changer">
                            <select>
                                <option value="move">Move to...</option>
                                <option value="currentlyReading" onClick={this.handler}>Currently Reading</option>
                                <option value="wantToRead" onClick={this.handler}>Want to Read</option>
                                <option value="read" onClick={this.handler}>Read</option>
                                <option value="none" onClick={this.handler}>None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                      )})}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf" id='read'>
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.map(book =>{return(
                      <li key={book.id}>
                        <div className="book" id={this.state.bookId}>
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks})` }}></div>
                            <div className="book-shelf-changer">
                            <select>
                                <option value="move">Move to...</option>
                                <option value="currentlyReading" onClick={this.handler}>Currently Reading</option>
                                <option value="wantToRead" onClick={this.handler}>Want to Read</option>
                                <option value="read" onClick={this.handler}>Read</option>
                                <option value="none" onClick={this.handler}>None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                      )})}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" ></Link>
            </div>
          </div>
        );
    }
}

export default ListBooks;