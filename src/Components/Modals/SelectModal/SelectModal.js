import React from 'react';
import ModalBase from '../Modal/ModalBase';

import './SelectModalStyleSheet.scss'

const SelectModal = ({item})=>{
    return(
      <ModalBase>
          <div className="SelectModal-container">
                {item.map((l)=>{
                    return(
                        <>
                        <button>{l.title}</button>
                        </>
                    )
                })}
          </div>
      </ModalBase>
    )
}

export default SelectModal