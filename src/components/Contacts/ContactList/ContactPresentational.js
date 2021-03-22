import React from 'react';
import {Button,Card} from "antd"
import '../Contactview.css'
import EditContactContainer from "../ContactEdit/EditContactContainer"

const ContactPresentational = (props) => {

    const {contacts,setcontact,handleShowModal,visible,handleCancel} = props ;
 

    return (
        <>
        <div className="card">         
            <Card title="Contacts List">
                    <table className="cs-table" >
                        <thead>
                            <tr style={{textAlign : "center"}}>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th></th>
                                <th colSpan="2" style={{textAlign : "center"}}>Actions</th>
                            </tr>                  
                        </thead>
                        <tbody style={{textAlign : "center"}}>{
                            contacts.map(el=>
                            <tr key={el.id}>
                                <td>{el.name}</td>
                                <td>{el.phone}</td>
                                <td></td>
                                <td><Button size="large" type="primary" >Delete</Button></td>
                                <td><EditContactContainer id ={el.id} name={el.name} phone={el.phone}/></td>
                            </tr>
                            )
                            }
                        </tbody>
                    </table>
            </Card>             
        </div>
        
    </>
     );
}
 
export default ContactPresentational;