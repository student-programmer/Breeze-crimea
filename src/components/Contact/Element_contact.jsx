import React from 'react'

const Element_contact = ({contacts}) => {
    return (
        <div>
            <ul>
                 <p>Если вы хотите с намаи связаться позвоните по номеру -  </p> 
                {
                    contacts.map((contact, index)=> <li key={`${contact}_${index}`}>{contact}</li>)
                }
            </ul>
        </div>
    )
}

export default Element_contact
