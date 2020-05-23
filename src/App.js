import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import DogContainer from './containers/DogContainer'


const App = props => {
  return (
    <div className= "App"> 
    <Nav/> 
        <Switch> 
            <DogContainer/>
            <Route/> 
        </Switch> 
    </div>
  );
}

export default App;