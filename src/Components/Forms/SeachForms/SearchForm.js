import Reat,{useState} from 'react';
import { useForm } from "react-hook-form";
import FormBase from '../FormBase/FormBase';




import "./SearchFormStyleSheet.scss";

const SearchForm = ()=>{

    const onSubmit = data => console.log(data);


    return (
        <div className="Form-container">
            <FormBase
                onSubmit={onSubmit}
                name='Search'
                placeholder='search'
            />
         </div> 
    )
}

export default SearchForm