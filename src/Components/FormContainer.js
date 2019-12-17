import React from 'react';
import './FormContainer.css';

class BookForm extends React.Component{
  render(){

    return(
      <div className="form-container">
        <form id="book-form">
          <input id="title-input"  type="text" name="title-x" placeholder="TITLE" />
          <br/>
          <input id="author-input" type="text" name="author-x"  placeholder="AUTHOR" />
          <br/>
          <input id="pages-input"  type="text" name="pages-x" placeholder="PAGES" />
          <br/>

          <div className="button-container">
            <button id="save" type="submit"> SAVE </button>
            <button id="cancel" type="reset"> CANCEL </button>
          </div>
        </form>
      </div>

    )
  }
};

export default BookForm;
