import React from 'react';
import FormBase from '../../Forms/FormBase/FormBase';
import SearchForm from '../../Forms/SeachForms/SearchForm';
import CardVerbs from '../../Item/CardItem/CardVerbs/CardVerbs';
import useAxios from 'axios-hooks'


import './VerbsStyleSheet.scss'



 
const verb = 'Eten'
const verbTranslet = 'Manger'

const Verbs = ()=>{

    const [{ data, loading, error }, refetch] = useAxios(
        'http://localhost:3000/api/verbs/getNameVerbs'
    )
    return (
        <div className='Verb-container'>
           {data &&  <div className='Verb-header'>
                <div className="Verb-forms">     
                    <SearchForm
                    dataSearch={data}
                    />
                </div>
            </div>}
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