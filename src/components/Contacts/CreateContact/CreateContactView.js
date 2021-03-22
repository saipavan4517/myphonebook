import React, { useState, useEffect } from 'react';
import {Card,Button} from "antd";

const CreateContactView = (props) => {
    const {handleForm}=props;

    const styles={marginRight : "15px"}
    return ( 
    <div>
        <h2>Content</h2>
             <Card>
                 <h2>Content</h2>
                 <Button size="large" type="primary" style={styles} onClick={handleForm}>Submit</Button>
                 <Button size="large" type="primary" style={styles} onClick={handleForm}>Cancel</Button>
             </Card>
           
    </div> );
}
 
export default CreateContactView;