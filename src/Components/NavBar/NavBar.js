import React,{ useState }from 'react';
import {Link, Router} from "react-router-dom";
//StyleSheet
import './NavBarStyleSheet.scss';

import ndl from '../../assets/ndl.jpg';
import login from '../../assets/jeason.jpg';
import SearchForm from '../Forms/SeachForms/SearchForm';


const NavBar = ()=>{
    const [langImg, setLangImg] = useState(ndl);
    const [loginImg, setLoginImg] = useState(login)
    const [listItems, setListItems] = useState([
        'Spelletjes', 
        'Conversatie',
        'Woordenschat',
        'Verbum'
    ])

    const items = listItems.map((item)=>{
        return (
                <li className='Item'>
                    <Link style={{textDecoration:'none'}}to={'/'+item}item>{item}</Link>
                </li>  
             )    
    });

    return(
        <div className='Container'>
            <div className='Main'> 
                <img  className='ImgLang' src={langImg}></img>
                <div className="Forms">
                    <SearchForm></SearchForm>
                </div>
            </div>
            <div className='Nav-Items'>
                <ul className='Items'>{items}</ul>
            </div>
                <img className='ImgLang' src={login}></img>
        </div>
       
    )
}

export default NavBar;