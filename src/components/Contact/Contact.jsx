import React from 'react';
import ElementContact from './ElementContact';
const Contact = () =>{
    return(
        <div className="wrapper">
            <ElementContact contacts={[
                "+79788281091",
                "+79782725124",
                "email - breezecrimea@gmail.com",
            ]}/>
        </div>
        
    )
}
export default Contact;

