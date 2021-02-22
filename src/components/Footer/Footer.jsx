import React from 'react';
import f from './Footer.module.css';
const Footer = (props) =>{
return(
    <div className={f.wrapper}>
        <p className={f.aboutUs}>НАША КОМПАНИЯ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМ ДИЛЕРОМ КОНДИЦИОНЕРОВ, С ПРАВОМ ПРОДАЖИ НА ВСЕЙ ТЕРРИТОРИИ РЕСПУБЛИКЕ КРЫМ И ДАЛЬНЕЙШЕГО ОБСЛУЖИВАНИЯ ТЕХНИКИ:</p>
    </div>
)
}
export default Footer;