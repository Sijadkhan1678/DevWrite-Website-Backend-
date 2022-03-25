import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router ,Route,Switch}  from 'react-router-dom';
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
const App= ()=> {
  return (
  
    <Router>
    <Fragment>
      
      <Navbar/>
      <Register />
      <div className='container'>
      <Switch>
      <Route  exact path='/Home'  component={Home}/>
      
      
      </Switch>
        
       </div>
         
      
    </Fragment>
    </Router>
  );
}

export default App;
