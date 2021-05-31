import React from 'react'
import cont from "./Contact.module.css"
const ElementContact = ({contacts}) => {
    return (
        <div className={cont.element}>
            <ul>
             
            <p className={cont.inf1}>телефон:</p> 
            <p className={cont.inf2}>email:</p>
            <p className={cont.emailInf}>breezecrimea@gmail.com</p>
            
              {
                    contacts.map((contact, index)=> <li className={cont.phoneNumber}key={`${contact}_${index}`}>{contact}</li>)
                }
            </ul>
        </div>
    )
}

export default ElementContact
