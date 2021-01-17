import Reat,{useState,useEffect} from 'react';
import { useForm } from "react-hook-form";
import FormBase from '../FormBase/FormBase';
import useAxios from 'axios-hooks'





import "./SearchFormStyleSheet.scss";

const SearchForm = ()=>{
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handledChange = event => {
        setSearchTerm(event.target.value);
      };

    // const [{ data, loading, error }, refetch] = useAxios(
    //     'http://localhost:3000/api/verbs//getNameVerbs'
    // )
    const data1 =[
        "hebben",
        "aankomen",
        "aantrekken",
        "bedanken",
        "beginnen",
        "begrijpen",
        "bellen",
        "beschrijven"
      ]
    const onSubmit = data =>  setSearchTerm(data);

    useEffect(() => {
        const results = data1.filter(item =>
          item.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
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
            {/* <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
            </ul> */}
         </div> 
    )
}

export default SearchForm