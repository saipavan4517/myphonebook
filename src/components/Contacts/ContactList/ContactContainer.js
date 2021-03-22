import React,{useState,useEffect} from 'react';
import ContactPresentational from "./ContactPresentational"
import CreateContact from "../CreateContact/CreateContactPresentational" ;


 const ContactContainer = (props) => {

    const [contacts, setcontactList] = useState([]);
    const [contact, createContact] = useState(false);
    const [visible,setShowmodal] = useState(false) ;    

    
    const setcontact=()=>{
        createContact(true) ;
    }  
 
    const handleShowModal=()=>{
        setShowmodal(true) ;
    }  

    const handleCancel = ()=>{
        setShowmodal(false) ;
    }
   
    useEffect(()=>{
        const createContactreq={
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'sai pavan', phone : '7989598785' })

        }
        fetch("https://jsonplaceholder.typicode.com/users",createContactreq)
        .then(res=>res.json())
        .then(data=> console.log("new data added ",data))
},[])



    useEffect(()=>{ 
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then(data=> setcontactList(data)) 
            
    },[])
    
   
  
    console.log("in contact component",contact)
    return ( 
        <div>    
           <ContactPresentational contacts={contacts} setcontact={setcontact}
            handleShowModal={handleShowModal} visible={visible} handleCancel={handleCancel}/> 
        </div>
     );
}
 
export default  ContactContainer