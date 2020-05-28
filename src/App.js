import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import DogShowPage from './components/DogShowPage'
import DogIndex from './components/DogIndex'
import Auth from './components/Auth'
import SignUp from './components/SignUp'
import EventsIndex from './components/EventsIndex'
import EventsForm from './components/EventsForm'
import EventProfile from './components/EventProfile'
import EditEventForm from './components/EditEventForm'
// import DogCard from './components/DogCard'
// require('log-timestamp')(function() {
//     return new Date()

// });

// import {DogShowPage, DogIndex, Auth, MainContainer, Nav, SignUp, EventsIndex, EventsForm } from './components'
const url = 'http://localhost:3000/api/v1'

class App extends React.Component {

    state = {
        loggedInDog: null,
        loggedInDogFollowees: [],
        username: "user10",
        loggedInDogfollowers: [],
        follow_id: null, //maybe keep
        dogs: [],
        selected_dog: ''
    }

    componentDidMount() {
        fetch(`${url}/dogs`)
        .then(r => r.json())
        .then( dogs => this.setState({ dogs: dogs.data}))
            // console.log("dogs",dogs.data.attributes) )
    }
    

    // setCurrentUser = (dogs, username) => {
    //     console.log('username', username)
    //     this.setState({
    //         current_user: dogs.data.find(dog => (dog.attribute.username === username) ? dog : "Invalid Username")
    //     }) 
    // }

    onlyUnique = (value, index, self) => { 
        return self.indexOf(value) === index;
    }

    getSelectedDog = (selected_dog) => {
        this.setState({selected_dog})
    }



    handleUsername = (event) => {
        event.preventDefault()
        this.setState({ username: event.target.value })
    }

    handleLogin = (event, username) => {
        event.preventDefault()

        fetch(`${url}/dogs/login/${username}`)
            .then(r => r.json())
            .then(dog => 
                this.setState({ 
                    loggedInDog: dog, 
                    loggedInDogFollowees: dog.followees, 
                    loggedInDogfollowers: dog.followers, 
                    username: ''}))
            
    }

    handleSignOut = (event) => {
        event.preventDefault()
        this.setState({ 
            loggedInDog: null,  
            loggedInDogFollowees: null,  
            loggedInDogfollowers: null})
    }



    handleFollow = (event, dog) => {
        event.preventDefault()
        // console.log("followed dog", dog)
        const {loggedInDog, loggedInDogFollowees, selected_dog, dogs} = this.state
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
            .then( followObj => {   

                this.setState({

                selected_dog: {...selected_dog, followers: [...selected_dog.followers, followObj.follower]}, 

                loggedInDogFollowees: [...loggedInDogFollowees, followObj.followee],

                loggedInDog: { ...loggedInDog, followees: [...loggedInDog.followees, followObj.followee ]},   
                        
                dogs: dogs.map(dog => parseInt(dog.id) === selected_dog.id 
                    ? {...dog, attributes: {...dog.attributes, followers: [...dog.attributes.followers, followObj.follower]}} 
                    : dog )
               
                })

            })
    }

    


    // dogs: dogs.map(dog => 
    //     dog.id === selected_dog.id 
    //     ? 
    //     dog.attributes.followers.concat(followObj.follower) 
    //     : 
    //     dog ),


    // handleUnfollow = (selectedDogID) => {
    //     // id is selected_dog.id passed in from click 
    //     const {loggedInDog, loggedInDogFollowees, selected_dog} = this.state
    //     this.setState({ 
    //         loggedInDogFollowees: loggedInDogFollowees.filter((followee) => followee.id !== selectedDogID), 
    //         selected_dog: {
    //             ...selected_dog,
    //             followers: selected_dog.followers.filter((follower) => follower.id !== loggedInDog.id)
    //         },
    //     })
    // }


    

// look through the dogs 

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
        console.log("//////////// APP RENDERED ////////////")
        const {loggedInDog, username, loggedInDogFollowees, loggedInDogfollowers, dogs, selected_dog} = this.state
        // console.log("app Followers", followers)
        // console.log("loggedin followees", loggedInDogFollowees)
        // console.log("follow id", follow_id)
        // console.log("logged in followers", loggedInDogfollowers)
        // console.log("selected dog", selected_dog)

        // if (this.state.dogs) {

            // console.log("dog state", this.state.dogs)
        

        // what about the setFollowId thing do i need that? 
        // just fetch all the follows maybe? pass it down too?
        //              setFollowID={this.setFollowID} 
                        // follow_id={follow_id}

        ///// QUESTION: should i pass it down via Route or directly? I tried both //////
        //// i tried setting state to dogs.data initially which has worked before but now is not. 
        
        return (
            <div className= "App"> 
            <Nav loggedInDog={loggedInDog}/> 
                <Switch> 
                    <Route path='/dogs/:id' render={(routerProps) => 
                        <DogShowPage 
                            {...routerProps} 
                            dogs={dogs}  
                            loggedInDog={loggedInDog}
                            selected_dog={selected_dog}
                            loggedInDogFollowees={loggedInDogFollowees}
                            loggedInDogfollowers={loggedInDogfollowers}
                            handleFollow={this.handleFollow} 
                            handleUnfollow={this.handleUnfollow}
                            onlyUnique={this.onlyUnique} /> } />

                    <Route path="/dogs" render={(routerProps) => 
                        <DogIndex 
                            {...routerProps} 
                            dogs={dogs}  
                            loggedInDog={loggedInDog}
                            loggedInDogFollowees={loggedInDogFollowees}
                            loggedInDogfollowers={loggedInDogfollowers}
                            selected_dog={selected_dog}
                            getSelectedDog={this.getSelectedDog}
                            /> } 
                    /> 
                     <Route path='/events/new' component={EventsForm}/> 
                    <Route path='/events/:id' render={(routerProps) => <EventProfile {...routerProps} loggedInDog={loggedInDog} /> } />   
                    <Route exact path='/events/edit/:id' render={(routerProps) => <EditEventForm routerProps={routerProps} /> }/> 
                    <Route path='/events/:id' render={(routerProps) => <EventProfile {...routerProps} loggedInDog={loggedInDog} /> } /> 
                    <Route path='/events' component={EventsIndex}/> 
                    <Route path='/login' render={(routerProps) => <Auth {...routerProps} handleUsername={this.handleUsername} username={username} setLoggedInDog={this.handleLogin} loggedInDog={loggedInDog} handleSignOut={this.handleSignOut} /> }/> 
                    <Route path='/signup' component={SignUp}/> 

                </Switch> 
            </div>
        );
    }
}




export default App;






