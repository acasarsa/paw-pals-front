import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
// import DogContainer from './containers/DogContainer'
import DogProfile from './components/DogProfile'
import DogIndex from './components/DogIndex'
import Auth from './components/Auth'
import MainContainer from './containers/MainContainer';

// import {DogProfile, DogIndex, Auth, MainContainer } from './components'

const App = props => {
  return (
    <div className= "App"> 
    <Nav/> 
        <Switch> 
            <Route path='/dogs/:id' component={DogProfile}/>   
            <Route path='/dogs/' component={DogIndex}/> 
            <Route path='/login' component={Auth}/> 
            <Route path='/' component={MainContainer}/> 
        </Switch> 
    </div>
  );
}

export default App;

