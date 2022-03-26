import React, {Fragment,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router ,Route,Switch}  from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


const App= ()=> {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
  
    <Router>
    <Fragment>
      
      <Navbar/>
      
      <div className='container'>
      <Switch>
      <Route  exact path='/Home'      component={Home}/>
      <Route  exact path='/login'     component={Login}/>
      <Route  exact path='/register'  component={Register}/>
      
      
      </Switch>
        
       </div>
         
      
    </Fragment>
    </Router>
  );
}

export default App;
