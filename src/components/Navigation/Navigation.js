import React from 'react';
import {Menu } from 'antd';
import  {BrowserRouter as Router ,Switch,Link ,Route,Redirect} from 'react-router-dom' ;
import  CreateContainer from '../Contacts/CreateContact/CreateContactContainer';
import Summary from "../Summary/Summary"
import './Navigation.css'


const Navigation = (props) => {
    console.log("in navigation") ;
    const {location} = props ;
    
    return (
        <Router>
            <Menu theme="dark" mode ="horizontal" style={{textAlign : "center" , fontSize : "30px"}} >
                <Menu.Item>
                    <Link to="/Contacts">Contacts</Link>    
                </Menu.Item> 
                <Menu.Item>
                    <Link to="Summary">Summary</Link>                        
                </Menu.Item>
            </Menu>
            <Switch> 
               <Route exact path='/' component={CreateContainer}/>
                <Route path="/Contacts"><CreateContainer /></Route>  
                <Route path="/Summary"><Summary/></Route>  
            </Switch>
        </Router>
     );
}
 
export default Navigation;