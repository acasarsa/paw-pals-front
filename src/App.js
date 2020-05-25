import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import DogProfile from './components/DogProfile'
import DogIndex from './components/DogIndex'
// import DogContainer from './containers/DogContainer'
import Auth from './components/Auth'
import MainContainer from './containers/MainContainer';
import SignUp from './components/SignUp'
import EventsIndex from './components/EventsIndex'
import EventsForm from './components/EventsForm'
import EventProfile from './components/EventProfile'

// import {DogProfile, DogIndex, Auth, MainContainer, Nav, SignUp, EventsIndex, EventsForm } from './components'
const url = 'http://localhost:3000/api/v1'

class App extends React.Component {

    state = {
        current_user: '',
        username: ''
    }

    // setCurrentUser = (dogs, username) => {
    //     console.log('username', username)
    //     this.setState({
    //         current_user: dogs.data.map(dog => (dog.attribute.username === username) ? dog.id : <SignUp/>)
    //     }) 
        
    // }

    handleUsername = (event) => {
        event.preventDefault()
        this.setState({ username: event.target.value })
    }

    handleLogin = (username) => {

        fetch(`${url}/dogs`)
            .then(r => r.json())
            .then(dogs => this.setState({
                current_user: dogs.data.map(dog => (dog.attribute.username === username) ? console.log("dog id",dog.id) : <SignUp/>)
            }) )
            
    }
// can pass down current_user to events and add a column for event create so we can add logic for 
// if owner is your friend then you see the events. 
// add events profile page 
    render() {
        console.log("hi",this.state.current_user)
        const {current_user, username} = this.state

        return (
            <div className= "App"> 
            <Nav/> 
                <Switch> 
                    <Route path='/dogs/:id' render={(routerProps) => <DogProfile {...routerProps} current_user={current_user} /> } />   
                    <Route path="/dogs" component={DogIndex}/>
                    <Route path='/events/:id' render={(routerProps) => <EventProfile {...routerProps} current_user={current_user} /> } />   
                    <Route path='/events/new' component={EventsForm}/> 
                    <Route path='/events' component={EventsIndex}/> 
                    <Route path='/login' render={(routerProps) => <Auth {...routerProps} handleUsername={this.handleUsername} username={username} setCurrentUser={this.handleLogin} current_user={current_user} /> }/> 
                    <Route path='/signup' component={SignUp}/> 
                    {/* <Route exact path='/' component={MainContainer}/>  */}
                </Switch> 
            </div>
        );
    }
}


// this.setCurrentUser

export default App;

