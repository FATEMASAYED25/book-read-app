import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
class SearchPage extends Component {
  state = {
    query: "",
  
  }




  // changing the state depends on the value wich the input has written down
  //then set state depending on the search query 
  changeHandler = (e) => {

    this.setState({
      query: e.currentTarget.value
    })
 

    
  }

  render() {

    const { query} = this.state;
    const {books} =this.props;

    // filter the books depends on the new value has written down in the query state 
    const filterBooks= query ==="" 
    ? books
    : books.filter((c)=>(
        c.title.toLowerCase().includes(query.toLowerCase())
    ))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search"></Link>
          <div className="search-books-input-wrapper">

            <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.changeHandler}
            />

          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {filterBooks.map(book => {
              return (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks})` }}></div>
                      <div className="book-shelf-changer">
                        <select onChange={(e)=>{(book.shelf) = e.target.value}}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
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
