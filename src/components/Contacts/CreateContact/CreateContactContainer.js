import React, { useState, useEffect } from 'react';
import CreateContactPresentational from './CreateContactPresentational';
import ContactList from "../ContactList/ContactContainer" ;
import Contactview from "./CreateContactView" ;

const CreatecontactContainer = ()=>{
    const [visible,setShowContact] = useState(true);
    const [form ,setShowForm] = useState(false)


   const handleClick =()=>{
        setShowContact(false)
        setShowForm(true)
    } 

    const handleForm =()=>{
        setShowForm(false)
        setShowContact(true)
    }

    return(
        <div>
             { visible &&  
             <div>
            <CreateContactPresentational handleClick={handleClick} />
             <ContactList />
             </div>
               }
            {form &&  <Contactview  handleForm={handleForm}/>   }
        </div>
    )

}

export default CreatecontactContainer;