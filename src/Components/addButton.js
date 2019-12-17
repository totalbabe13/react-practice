import React from 'react';
import './addButton.css';

const test = require('./plus.svg')

class AddButton extends React.Component {

  render(){
    return(
      <div className="add-button">
        <img src={test} className="plus" alt="plus"/>
      </div>
    );
  }
}

export default AddButton;
