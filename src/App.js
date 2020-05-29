import React from 'react';
import './App.css';
import styled from 'styled-components'


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

const url = 'http://localhost:3000/api/v1'


const MainDiv = styled.div `
    /* background-image: url(%PUBLIC_URL%/pink-paws.png);
    background-repeat: repeat-x;  */
    text-align: center;

`

class App extends React.Component {

    state = {
        loggedInDog: null,
        loggedInDogFollowees: [],
        username: "user7",
        loggedInDogfollowers: [],
        follow_id: null, //maybe keep
        dogs: [],
        selected_dog: '',
        search: ''
    }

    componentDidMount() {
        fetch(`${url}/dogs`)
        .then(r => r.json())
        .then( dogs => this.setState({ dogs: dogs.data}))
    }
    


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

    
    handleSearch = (event) => {
        this.setState({search: event.target.value})
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
        const {loggedInDog, username, loggedInDogFollowees, loggedInDogfollowers, dogs, selected_dog, handleSearch, search} = this.state


        console.log("selected dog", selected_dog)
        console.log(search)

        let filteredDogs = [...dogs]

        if (search.length > 0) {
            filteredDogs = filteredDogs.filter( dog => { 
            if ( dog.attributes.name.toLowerCase().includes(this.state.search.toLowerCase()) || dog.attributes.status.toLowerCase().includes(this.state.search.toLowerCase()) ) {
                return true
            } else {
                return false
            }  
            })
        } 
        console.log("filteredDogs", filteredDogs)


        // what about the setFollowId thing do i need that? 
        // just fetch all the follows maybe? pass it down too?
        //              setFollowID={this.setFollowID} 
                        // follow_id={follow_id}

        ///// QUESTION: should i pass it down via Route or directly? I tried both //////
        //// i tried setting state to dogs.data initially which has worked before but now is not. 
        
        return (
            <MainDiv > 
            <Nav handleSearch={this.handleSearch} loggedInDog={loggedInDog}/> 


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
                            dogs={filteredDogs}  
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
            </MainDiv>
        );
    }
}




export default App;






