import React from 'react';
import useAxios from 'axios-hooks';
import { useRouteMatch,useHistory, useLocation } from "react-router-dom";


//Style
import './VerbsStyleSheet.scss'

//Components
import SearchForm from '../../Forms/SeachForms/SearchForm';
import CardVerbs from '../../Item/CardItem/CardVerbs/CardVerbs';
import GetItemVerbs from '../../layout/GetItemVerb';
import SideBar from '../../layout/ModalSidebar/SideBar';



const Verbs = () =>{

    let name = useLocation();
    let slug = name.pathname.split("/")[2]

    console.log(slug)

    const verb = slug
    const verbTranslet = 'Manger'

    const [{ data, loading, error }, refetch] = useAxios(
        'http://localhost:3000/api/verbs/getNameVerbs'
    )
    return (
        <div className='Verb-container'>
            <SideBar>
                Verbum
            </SideBar >
          <div className="Verb-Main">
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
                       <GetItemVerbs
                       name={slug}
                       />
                </div>
            </div>
           
            <div className='Verb-footer'>
                
            </div>
          </div>
             
        </div>
       
    )
}

export default Verbs