import React from 'react';
import 'antd/dist/antd.css' ;
import {Layout} from 'antd'
import Navigation from './components/Navigation/Navigation'

function App(props) {
  return (
    <Layout>
         <Navigation />
    </Layout>
  );
}

export default App;
