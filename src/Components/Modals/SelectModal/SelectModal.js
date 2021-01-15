import React from 'react';
import Button from '../../Item/Button/Button';
import ModalBase from '../Modal/ModalBase';

import './SelectModalStyleSheet.scss'

const SelectModal = ({item})=>{
    return(
      <ModalBase>
          <div className="SelectModal-container">
                {item.map((l)=>{
                    return(
                        <>
                      <Button buttonSize={"large"} onclick={()=>{console.log('hh')}}>
                          {l.title}
                      </Button>
                        </>
                    )
                })}
          </div>
      </ModalBase>
    )
}

export default SelectModal