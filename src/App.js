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
import DogCard from './components/DogCard'
// require('log-timestamp')(function() {
//     return new Date()

// });


// import {DogProfile, DogIndex, Auth, MainContainer, Nav, SignUp, EventsIndex, EventsForm } from './components'
const url = 'http://localhost:3000/api/v1'

class App extends React.Component {

    state = {
        loggedInDog: null,
        loggedInDogFollowees: [],
        username: '',
        followers: []
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
            .then(dog => this.setState({ loggedInDog: dog, loggedInDogFollowees: dog.followees, username: ''}))
            
    }

    handleSignOut = (event) => {
        event.preventDefault()
        this.setState({ loggedInDog: null })
    }

    handleFollow = (event, dog) => {
        event.preventDefault()
        console.log("followed dog", dog)
        const {loggedInDog} = this.state
        // const {dog} = this.state
        let newFollow = {
            follower_id: loggedInDog.id,
            followee_id: dog.id,
        }
    
        let options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newFollow)
        }
    
        fetch(`${url}/follows`, options)
            .then(r => r.json())
            .then( followObj => this.setState({
                loggedInDogFollowees: [...this.state.loggedInDogFollowees, followObj.followee], followers: [...dog.followers, followObj.follower]
                }) 
            );
            
    }

    // reRenderFollowers = () => {
    //     this.state.followers.map(follower => <DogCard key={follower.id} {...follower}/> )
    //     console.log('hit')
    // }

//     fetch(`${url}/follows`, options)
//     .then(r => r.json())
//     .then( followObj => {
//         this.setState({follow_id: followObj.id})
//         let follower_id = followObj.follower_id 
//         // console.log("follower_id",followObj.follower_id)
//         fetch(`${url}/dogs/${follower_id}`)
//         .then( r => r.json())
//         .then( newFollower => this.setFollowState(newFollower))
//     })
// }

// setFollowState = (newFollower) => {
// const {dog} = this.state
// this.setState({ dog: {...dog, followers: [...dog.followers, newFollower ]}
// })}

// can pass down current_user to events and add a column for event create so we can add logic for 
// if owner is your friend then you see the events. 
// add events profile page 
    render() {
        const {loggedInDog, username, loggedInDogFollowees, followers} = this.state
        console.log("F's in App", this.state.followers)

        return (
            <div className= "App"> 
            <Nav loggedInDog={loggedInDog}/> 
                <Switch> 
                    <Route path='/dogs/:id' render={(routerProps) => <DogProfile {...routerProps} followers={followers} loggedInDog={loggedInDog} loggedInDogFollowees={loggedInDogFollowees} handleFollow={this.handleFollow} reRenderFollowers={this.reRenderFollowers} /> } />   
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

