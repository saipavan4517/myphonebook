import React, { useState, useEffect } from 'react';
import EditContactPresentational from './EditContactPresentational'

const EditContactContainer = (props) => {
    const {id ,name ,phone} = props ;
    const [state ,setState] =useState(false)

    const handleCancel =()=>{
        setState(false)
    }

    const showModal = ()=>{
        setState(true)
    }

    const handleOk =(values)=>{
        props.form.validateFields().then((values) => {
            console.log("values :" ,values)
         // props.form.resetFields();
          props.onCreate(values);
        })
    }
    console.log("fogfd",name);

    return ( 
        <div>
            <EditContactPresentational  handleCancel={handleCancel} state={state} 
            name={name} phone={phone} handleOk={handleOk}
            showModal={showModal}/>
        </div>
    );
}
 
export default EditContactContainer;