import React from 'react'; 
import { Link } from 'react-router-dom';
import {
 Flex,
 Box,
  } from 'rebass'


const Nav = props => {

    
    return (
//         <Flex
//   px={2}
//   color='white'
//   bg='black'
//   alignItems='center'>
//       <Box mx='auto' />
        <div className="simple-flex-row">
            {/* <Link className="left-corner" to="/">Home</Link> */}
            <Link to="/dogs">Dogs</Link>
            {props.loggedInDog ? <Link to={`/dogs/${props.loggedInDog.id}`}>My Profile</Link> : null}
            
            <Link to="/events">Events</Link>
            <Link to="/events/new">Create Event</Link>
            {/* <Link to="/dogs">Followers</Link> */}
            <div className="simple-flex-row right-corner">

            {/* {`Welcome ${props.loggedInDog.name}  |  Sign Out` } */}
            <Link to="/login">{props.loggedInDog ? `Follower Count: ${props.loggedInDog.followers.length} Followee Count: ${props.loggedInDog.followees.length} ${props.loggedInDog.name} | id:${props.loggedInDog.id}  |  Sign Out` : "Sign In" }</Link> 

            </div>
        </div>
        //  </Flex>
    )
}

export default Nav;

