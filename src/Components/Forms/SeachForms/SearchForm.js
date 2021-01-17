import Reat,{useState,useEffect} from 'react';
import { useForm } from "react-hook-form";
import FormBase from '../FormBase/FormBase';





import "./SearchFormStyleSheet.scss";

const SearchForm = ({dataSearch})=>{
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handledChange = event => {
        setSearchTerm(event.target.value);
    };

    
    const onSubmit = data =>  setSearchTerm(data);

    useEffect(() => {

        if(dataSearch){
            const results = dataSearch.filter(item =>
                item.toLowerCase().includes(searchTerm)
              );
              setSearchResults(results);

        }
       
      }, [searchTerm]);
    
    

    console.log(searchResults)

    return (
        <div className="Form-container">
            <FormBase
                onSubmit={onSubmit}
                name='Search'
                placeholder='search'
                onchange={handledChange}

            />
           <span>ji</span>
         </div> 
    )
}

export default SearchForm