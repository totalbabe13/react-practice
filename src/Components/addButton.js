import React from 'react';
import './addButton.css';
import Modal from './Modal'

const plusSign = require('./plus.svg');

class AddButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        open: false,
      }
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({
        open: !state.open
       })
    )
  }

  render() {
    if (!this.state.open){
      return (
        <div className="add-button" onClick={this.handleClick}>
          <img src={plusSign} className="plus" alt="plus"/>
        </div>
      )
    } else {
      return(
        <div className="add-button" >
          <img src={plusSign} className="plus" alt="plus"/>
          <Modal />
        </div>
      )
    }
  }
}

export default AddButton;
