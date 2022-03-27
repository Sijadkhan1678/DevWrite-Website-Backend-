import React, {Fragment,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router ,Route,Switch}  from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import store from './store';
import {Provider} from 'react-redux';
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert'

const App= ()=> {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    
    <Provider store={store}>
    <Router>
    <Fragment>
      
      <Navbar/>
      <Alert />
      
      <div className='container'>
      <Switch>
      <Route  exact path='/Home'      component={Home}/>
      <Route  exact path='/login'     component={Login}/>
      <Route  exact path='/register'  component={Register}/>
      
      
      </Switch>
        
       </div>
         
      
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
