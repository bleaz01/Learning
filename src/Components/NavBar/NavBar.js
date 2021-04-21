import React,{ useEffect, useState }from 'react';
import {Link, Router, useLocation} from "react-router-dom";
import {useDispatch} from 'react-redux';

//StyleSheet
import './NavBarStyleSheet.scss';

import ndl from '../../assets/ndl.jpg';
import login from '../../assets/jeason.jpg';
import SearchForm from '../Forms/SeachForms/SearchForm';
import Button from '../Item/Button/Button';
import { handleLogout } from '../../lib/redux/actions/authentication';


const NavBar = ({user})=>{

    let name = useLocation()
    let slug = name.pathname.split("/")[1]
    

    const dispatch = useDispatch()
    const [langImg, setLangImg] = useState(ndl);
    const [loginImg, setLoginImg] = useState(login)
    const [listItems, setListItems] = useState([
        'home',
        'comment',
        'book-reader',
        'spell-check',
        
    ])


    const items = listItems.map((item)=>{
        let tag = null
        if(item == slug) tag = true

        const route  =  {
            "home" : "home" ,
            "comment" : "messenger" ,
            "book-reader" : "vocabulary" ,
            "spell-check" : "verbum" ,
            // "whistle and flute" : "Suit" ,
          } ;
          
        return (
                
                <li>
                    <Link className={tag ? 'Item-current': 'Item'}to={'/'+ route[item] }><i class={`fas fa-${item} fa-1x`}></i></Link>
                </li>  
               
        )    
    });

    return(
        <div className='Container-Nav'>
            <div className='Main-Nav'> 
               
                <SearchForm/>
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