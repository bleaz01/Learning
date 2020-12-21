import React from 'react';
import FormBase from '../../Forms/FormBase/FormBase';
import CardVerbs from '../../Item/CardItem/CardVerbs/CardVerbs';

import './VerbsStyleSheet.scss'

const onSubmit = data => console.log(data);

const verb = 'Eten'
const verbTranslet = 'Manger'

const Verbs = ()=>{
    return (
        <div className='Verb-container'>
            <div className='Verb-header'>
                <div className="Verb-forms">
                    <FormBase
                        onSubmit={onSubmit}
                        name={'SearchVerb'}
                        StyleForm='Forms'
                        placeholder='Eten'
                    />
                </div>
            </div>
            <div className='Verb-body'>
                <div className='Verb-banner'>
                    <h4>Conjugatie van het werkwoord "{verb}" = "{verbTranslet}"</h4>
                </div>
                <div className='Verb-content'>
                        <CardVerbs/>
                </div>
            </div>
           
            <div className='Verb-footer'>
                
            </div>
        </div>
    )
}

export default Verbs