import React  from 'react';
import {Modal,Button,Form,Input} from 'antd'

const EditContactPresentational = (props) => {
    const [form] = Form.useForm();
    

    const {handleCancel,state,showModal,handleOk ,name ,phone} = props ;
    console.log("ggggog",name);
    return (
        <div>
            <>
            { state ?
            <Modal
            title ="Update Contact"
            visible ={state}
            onOk ={handleOk}
            onCancel={handleCancel}
            footer ={[
                <Button key="Back" type="primary" onClick={handleCancel}>Cancel</Button>,
                <Button key="Submit" type="primary" onClick={handleOk}>Update</Button>
            ]}
            >
                <Form
                form={form} 
                layout="vertical"
                >
                    <Form.Item name="name"   label="Name"  >
                        <Input type="text"  defaultValue={name}/>
                    </Form.Item>
                    <Form.Item name="Phone"   label="Phone Number" >
                        <Input type="text" defaultValue={phone}/>
                    </Form.Item>
                </Form>

            </Modal> :
            <Button size="large" type="primary" onClick={showModal}>Update</Button>
        }
            </>
        </div>
      );
}
 
export default EditContactPresentational;