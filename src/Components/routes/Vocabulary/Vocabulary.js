
import React from 'react';

//component
import Card from '../../Item/Card/Card';

import img from '../../../assets/jeason.jpg'
import './VocabularyStyleSheet.scss'

const Vocabulary = ()=>{
    return (
        <div className='Voc-container'>
            <div className='Voc-header'>
               <Card
                cardHeader='salut'
                imgCard={img}
                cardFooter='ddd'
               />
            </div>
            <div className='Voc-body'>
                k
            </div>
        </div>
    )
}

export default Vocabulary