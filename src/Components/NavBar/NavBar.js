import React,{ useState }from 'react';
import {Link, Router} from "react-router-dom";
import {useDispatch} from 'react-redux';

//StyleSheet
import './NavBarStyleSheet.scss';

import ndl from '../../assets/ndl.jpg';
import login from '../../assets/jeason.jpg';
import SearchForm from '../Forms/SeachForms/SearchForm';
import Button from '../Item/Button/Button';
import { handleLogout } from '../../lib/redux/actions/authentication';


const NavBar = ({user})=>{

    const dispatch = useDispatch()
    const [langImg, setLangImg] = useState(ndl);
    const [loginImg, setLoginImg] = useState(login)
    const [listItems, setListItems] = useState([
        'home',
        'Spelletjes', 
        'Conversatie',
        'Woordenschat',
        'Verbum',
        'Structure',
        'verbroken'
        
    ])


    const items = listItems.map((item)=>{
        let tag = null
        // if(item =="verbroken") tag = dispatch(handleLogout())
        return (
            
                <li onClick={tag}>
                    <Link className='Item'to={'/'+ item }>{item}</Link>
                </li>  
               
        )    
    });

    return(
        <div className='Container-Nav'>
            <div className='Main'> 
                <div>
                    <i class="fas fa-search fa-1x"></i>   
                </div>
                <div className="Forms">
                    <SearchForm/>
                </div>
            </div>
            <div className='Nav-Items'>
                <ul className='Items'>
                    {items}
                </ul>
            </div>
                {/* <img className='ImgLang' src={user.langage}></img> */}
               
        </div>
       
    )
}

export default NavBar;