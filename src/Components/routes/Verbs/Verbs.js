import React from 'react';
import FormBase from '../../Forms/FormBase/FormBase';

import './VerbsStyleSheet.scss'

const onSubmit = data => console.log(data);


const Verbs = ()=>{
    return (
        <div className='Verb-container'>
            <div className='Verb-header'>
                <div className="Verb-forms">
                    <FormBase
                        onSubmit={onSubmit}
                        name={'SearchVerb'}
                        StyleForm='Forms'
                    />
                </div>
            </div>
            <div className='Verb-body'>

            </div>
            <div className='Verb-footer'>
                
            </div>
        </div>
    )
}

export default Verbs