import React from "react";
import Logo from '../../assets/logo_jose.png'
import {FaGithub} from 'react-icons/fa'

import './footerStyle.css'


export default function Footer(){
    return(
        <div className="containerHeader">
            <img src={Logo} id="imageLogo" alt=""/> 
            <FaGithub size={50}/>
        </div>
    )
}