import React,{useState} from 'react';
import Modal from 'react-modal';

// style

import './ModalBaseStyleSheet.scss';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    

    
  },
  overlay: {zIndex: 1000}

};

const ModalBase = ({children, modalIsOpen, closeModal})=>{


  
 
  const afterOpenModal = ()=> {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 

    return(
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
  
          {children}
          </Modal>
        </div>
    )
}

export default ModalBase