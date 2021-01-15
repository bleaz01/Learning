import React from 'react'
import './ButtonStyleSheet.scss'

const Button = ({children, type, onclick, buttonStyles, buttonSize}) =>{

    const STYLES = [
        "color-base",
        "color-purple",
        "color-blue",
        "color-red",
        "color-green",
        
    ]

    const SIZE =[
        'small',
        'medium',
        'large'
    ] 

    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
    const checkButtonStyle = STYLES.includes(buttonStyles) ? buttonStyles : STYLES[0];

    return(
        <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={onclick} type={type} >
            {children}
        </button>
    )
}

export default Button