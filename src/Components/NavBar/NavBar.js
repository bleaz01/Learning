import React,{ useState }from 'react';

//StyleSheet
import './NavBarStyleSheet.scss';

import ndl from '../../assets/ndl.jpg' 
import SearchForm from '../Forms/SeachForms/SearchForm';


const NavBar = ()=>{
    const [langImg, setLangImg] = useState(ndl);
    const [listItems, setListItems] = useState([
        'Spelletjes', 
        'conversatie'
    ])

    const items = listItems.map((item)=>{
        <li className='Item'>{item}</li>
    });

    return(
        <div className='Container'>
            <div className='Main'>
                <div className='ImgLang'>
                    <h4>ndl</h4>
                    {/* <img src={langImg}></img> */}
                </div>
                <div className="Forms">
                    <SearchForm></SearchForm>
                </div>
                <div className='Nav-Items'>
                    <ul className='Items'>{items}</ul>
                </div>
            </div>
           
        </div>
       
    )
}

export default NavBar;