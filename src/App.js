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
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute'
import ProfileForm from './components/profile/Profileform';
import ArticleForm from './components/article/ArticleForm';
import Profile  from './components/profile/Profile';
import Article from './components/article/Article';

const App= ()=> {
  useEffect(() => {
  if(localStorage.token){
  setAuthToken(localStorage.token);
  }
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
       <Route exact path='/profile/:id'  component={Profile}/>
      <Route exact path='/profile/profileform'  component={ProfileForm}/> 
      <Route exact path='/articles/article/articleform'  component={ArticleForm} />
      <Route exact path='/articles/article/:id'   component = {Article} />
      </Switch>
        
       </div>
         
      
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
