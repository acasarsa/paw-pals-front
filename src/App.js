import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import DogProfile from './components/DogProfile'
import DogIndex from './components/DogIndex'
import Auth from './components/Auth'
import SignUp from './components/SignUp'
import EventsIndex from './components/EventsIndex'
import EventsForm from './components/EventsForm'
import EventProfile from './components/EventProfile'
import EditEventForm from './components/EditEventForm';

// import {DogProfile, DogIndex, Auth, MainContainer, Nav, SignUp, EventsIndex, EventsForm } from './components'
const url = 'http://localhost:3000/api/v1'

class App extends React.Component {

    state = {
        logged_in_dog: null,
        username: '',
    }

    // setCurrentUser = (dogs, username) => {
    //     console.log('username', username)
    //     this.setState({
    //         current_user: dogs.data.find(dog => (dog.attribute.username === username) ? dog : "Invalid Username")
    //     }) 
    // }

    handleUsername = (event) => {
        event.preventDefault()
        this.setState({ username: event.target.value })
    }

    handleLogin = (event, username) => {
        event.preventDefault()

        fetch(`${url}/dogs/login/${username}`)
            .then(r => r.json())
            .then(dog => this.setState({ logged_in_dog: dog, username: ''}))
            
    }

    handleSignOut = (event) => {
        event.preventDefault()
        this.setState({ logged_in_dog: null })
    }

// can pass down current_user to events and add a column for event create so we can add logic for 
// if owner is your friend then you see the events. 
// add events profile page 
    render() {
        const {logged_in_dog, username} = this.state

        return (
            <div className= "App"> 
            <Nav logged_in_dog={logged_in_dog}/> 
                <Switch> 
                    <Route path='/dogs/:id' render={(routerProps) => <DogProfile {...routerProps} logged_in_dog={logged_in_dog} /> } />   
                    <Route path="/dogs" component={DogIndex}/>
                    <Route path='/events/new' component={EventsForm}/> 
                    <Route path='/events/:id' render={(routerProps) => <EventProfile {...routerProps} logged_in_dog={logged_in_dog} /> } /> 
                    <Route path='/events/edit/:id' component={EditEventForm}/>
                    <Route path='/events' component={EventsIndex}/> 
                    <Route path='/login' render={(routerProps) => <Auth {...routerProps} handleUsername={this.handleUsername} username={username} setLoggedInDog={this.handleLogin} logged_in_dog={logged_in_dog} handleSignOut={this.handleSignOut} /> }/> 
                    <Route path='/signup' component={SignUp}/> 

                </Switch> 
            </div>
        );
    }
}




export default App;

