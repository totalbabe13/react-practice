import React from 'react';
import './Modal.css';
import BookForm from './FormContainer';

class Modal extends React.Component{

  render(){
    return(
       <div className='modal-show'>
       <div className="modal-content">
         <h2 className="modal-title">ADD NEW BOOK</h2>
         <p className="divider">_______________</p>
         <BookForm />
       </div>
       </div>
    )
  }
};

export default Modal;
