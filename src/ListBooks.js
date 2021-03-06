import React, { Component } from 'react'
import {Link} from "react-router-dom";

class ListBooks extends Component {

 
    render() {
      const {books ,updateShelf}=this.props
    
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
                      {books.map(book =>{
                        if(book.shelf === "currentlyReading"){
                        
                        return(
                      <li key={book.id}>
                        <div className="book" >
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193,backgroundImage: `url(${ book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf}
                           onChange={(e)=>updateShelf(book,e.target.value)}
                              >
          
                              <option value="move" disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                )}})}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf" id='wantToRead'>
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.map(book =>{
                        if(book.shelf === "wantToRead"){
                      
                      return(
                      <li key={book.id}>
                        <div className="book" >
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                            <select value={book.shelf}
                           onChange={(e)=>updateShelf(book,e.target.value)}
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                      )}})}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf" id='read'>
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.map(book =>{
                        if(book.shelf === "read"){
                      return(
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                            <select value={book.shelf}
                           onChange={(e)=>updateShelf(book,e.target.value)}
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                      )}})}
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
