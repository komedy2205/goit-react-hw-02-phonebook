import React from "react";

const ContactList = ({option, onDeleteContact}) => {
    
        return (
        <ul>
            {option.map((type) => (
                <li key={type.id}>
                    {type.name}: {type.number} 
                    <button type="button" onClick={() => onDeleteContact(type.id)}>Удалить</button>
                </li>
            ))}
            </ul>
        )
    };


export default ContactList