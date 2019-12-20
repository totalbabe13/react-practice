import React from 'react';
import './FormContainer.css';

class BookForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author:'',
      pages:''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A TITLE was submitted: ' + this.state.title );
    event.preventDefault();
  }
  render(){

    return(
      <div className="form-container">
        <form id="book-form" onSubmit={this.handleSubmit}>
          <input id="title-input"  type="text" value={this.state.title}  onChange={this.handleChange} name="title-x" placeholder="TITLE" />
          <br/>
          <input id="author-input" type="text" value={this.state.author} onChange={this.handleChange} name="author-x"  placeholder="AUTHOR" />
          <br/>
          <input id="pages-input"  type="text" value={this.state.pages}  onChange={this.handleChange} name="pages-x" placeholder="PAGES" />
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
