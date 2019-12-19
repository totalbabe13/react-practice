import React from 'react';
import './addButton.css';
import Modal from './Modal'

const test = require('./plus.svg')

class AddButton extends React.Component {
  handleClick(e) {
    e.preventDefault();

  }

  render(){
    return(
      <div className="add-button" onClick={this.handleClick}>
        <img src={test} className="plus" alt="plus"/>
      </div>
    );
  }
}

export default AddButton;
