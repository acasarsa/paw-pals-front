import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import DogProfile from './components/DogProfile'
import DogIndex from './components/DogIndex'
import Auth from './components/Auth'
import MainContainer from './containers/MainContainer';
import SignUp from './components/SignUp'
import EventsIndex from './components/EventsIndex'
import EventsForm from './components/EventsForm'


// const requestHeaders = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json' }

// import {DogProfile, DogIndex, Auth, MainContainer, Nav, SignUp, EventsIndex, EventsForm } from './components'

class App extends React.Component {
    render() {
        return (
            <div className= "App"> 
            <Nav/> 
                <Switch> 
                    <Route path='/dogs/:id' component={DogProfile}/>   
                    <Route path="/dogs" component={DogIndex}/>
                    <Route path='/events/new' component={EventsForm}/> 
                    <Route path='/events' component={EventsIndex}/> 
                    <Route path='/login' component={Auth}/> 
                    <Route path='/signup' component={SignUp}/> 
                    {/* <Route exact path='/' component={MainContainer}/>  */}
                </Switch> 
            </div>
          );
    }
}
  


export default App;

