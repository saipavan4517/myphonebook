import React, { useState } from 'react';
import {Card,Button} from "antd";

const CreateContact = (props) => {
    const {handleClick } = props ;
    return ( 
        <div>
            <Card>
                <h2>Create Contact</h2>
                <Button size="large" type="primary" onClick={handleClick}>Create Contact</Button>
             </Card>     
        </div>
     );
}
 
export default CreateContact;