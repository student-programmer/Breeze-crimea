import React from 'react';
import Element_contact from './Element_contact';
const Contact = (props) =>{
    return(
        <div className="wrapper">
            <Element_contact contacts={[
                "+79788281091",
                "+79782725124",
                "email - breezecrimea@gmail.com",
            ]}/>
        </div>
        
    )
}
export default Contact;

