import React from 'react';
import './bookCard.css';

class BookCard extends React.Component {
  render() {
    return(
      <div className="book-card">

        <h2 className="title-tag">Sample Book Title</h2>
        <p className="divider">______________ </p>
        <div className="author-container">
            <span className='author-tag'>Sample Author</span>
        </div>
        <div className="buttons-container">


        </div>
        <div className="pages-container">
          <span className="pages-tag">335 pages</span>
        </div>
      </div>
    );
  }
};

export default BookCard;
