import Reat,{useState} from 'react';
import { useForm } from "react-hook-form";




import "./SearchFormStyleSheet.scss";

const SearchForm = ()=>{

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("search")); // watch input value by passing the name of it

    return (
        <div className="Form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{border: 'none', height:"100%" ,width:"100%", borderRadius:"30px 30px 30px 30px", padding:"2% 5%"}} 
                name="search" 
                defaultValue="test" 
                ref={register} />
            </form>  
         </div> 
    )
}

export default SearchForm