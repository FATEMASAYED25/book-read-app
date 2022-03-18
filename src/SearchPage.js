import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from "react-router-dom";
class SearchPage extends Component {
  state = {
    books: [],
   
  }
  // changing the state depends on the value wich the input has written down
  //then set state depending on the search query 
  //then if the query = the name of the book or thubnail inoke the search function wich it setstate the books arry with the required books 
 onSearch = async (e) => {
  const query = e.target.value;
 
     let booksResult = await BooksAPI.search(query);
      booksResult.map((found) => {
         this.props.books.find((book) => book.id === found.id);
      
      });
      this.setState({ books: booksResult });
  }


  render() {

    const { books} = this.state;
    const {updateShelf}=this.props

    // filter the books depends on the new value has written down in the query state 
  

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search"></Link>
          <div className="search-books-input-wrapper">

            <input type="text"
              placeholder="Search by title or author"
              onChange={this.onSearch}
            />

          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {books.map(book => {
              return (
                <li key={book.id}>
                  <div className="book">
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



              )
            })}
          </ol>



        </div>

      </div>
    );
  }
}

export default SearchPage;
