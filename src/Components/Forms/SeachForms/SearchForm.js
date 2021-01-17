import Reat,{useState,useEffect} from 'react';
import { useForm } from "react-hook-form";
import FormBase from '../FormBase/FormBase';
import { useRouteMatch,useHistory } from "react-router-dom";




import "./SearchFormStyleSheet.scss";

const SearchForm = ({dataSearch})=>{
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handledChange = event => {
        setSearchTerm(event.target.value);
    };

    const history = useHistory();
    let {path,url} = useRouteMatch()

    
    const onSubmit = data =>  {
        setSearchTerm(data);
        history.push(`${url}/${searchResults[0]}`);
    }


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
           
         </div> 
    )
}

export default SearchForm