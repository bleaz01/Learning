import React,{ useState }from 'react';
import {Link, Router} from "react-router-dom";
import {useDispatch} from 'react-redux';

//StyleSheet
import './NavBarStyleSheet.scss';

import ndl from '../../assets/ndl.jpg';
import login from '../../assets/jeason.jpg';
import SearchForm from '../Forms/SeachForms/SearchForm';
import Button from '../Item/Button/Button';
import { handleLogout } from '../../lib/redux/reducers';


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
        'Structure'
    ])

    const items = listItems.map((item)=>{
        return (
            
                <li className='Item'>
                    
                    <Link style={{textDecoration:'none'}}to={'/'+ item }>{item}</Link>
                </li>  
             )    
    });

    return(
        <div className='Container'>
            <div className='Main'> 
                <img  className='ImgLang' src={user.img}></img>
                <div className="Forms">
                    <SearchForm></SearchForm>
                </div>
            </div>
            <div className='Nav-Items'>
                <ul className='Items'>{items}</ul>
                 <button type="button" onClick={() => dispatch(handleLogout())}>
                    logout
                </button>
            </div>
                {/* <img className='ImgLang' src={user.langage}></img> */}
               
        </div>
       
    )
}

export default NavBar;