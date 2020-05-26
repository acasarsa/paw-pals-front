import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import DogProfile from './components/DogProfile'
import DogIndex from './components/DogIndex'
// import DogContainer from './containers/DogContainer'
import Auth from './components/Auth'
import SignUp from './components/SignUp'
import EventsIndex from './components/EventsIndex'
import EventsForm from './components/EventsForm'
import EventProfile from './components/EventProfile'

// import {DogProfile, DogIndex, Auth, MainContainer, Nav, SignUp, EventsIndex, EventsForm } from './components'
const url = 'http://localhost:3000/api/v1'

class App extends React.Component {

    state = {
        loggedInDog: null,
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
            .then(dog => this.setState({ loggedInDog: dog, username: ''}))
            
    }

    handleSignOut = (event) => {
        event.preventDefault()
        this.setState({ loggedInDog: null })
    }

// can pass down current_user to events and add a column for event create so we can add logic for 
// if owner is your friend then you see the events. 
// add events profile page 
    render() {
        const {loggedInDog, username} = this.state

        return (
            <div className= "App"> 
            <Nav loggedInDog={loggedInDog}/> 
                <Switch> 
                    <Route path='/dogs/:id' render={(routerProps) => <DogProfile {...routerProps} loggedInDog={loggedInDog} /> } />   
                    <Route path="/dogs" component={DogIndex}/>
                    <Route path='/events/:id' render={(routerProps) => <EventProfile {...routerProps} loggedInDog={loggedInDog} /> } />   
                    <Route path='/events/new' component={EventsForm}/> 
                    <Route path='/events' component={EventsIndex}/> 
                    <Route path='/login' render={(routerProps) => <Auth {...routerProps} handleUsername={this.handleUsername} username={username} setLoggedInDog={this.handleLogin} loggedInDog={loggedInDog} handleSignOut={this.handleSignOut} /> }/> 
                    <Route path='/signup' component={SignUp}/> 

                </Switch> 
            </div>
        );
    }
}




export default App;

