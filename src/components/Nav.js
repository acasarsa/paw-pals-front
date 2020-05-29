import React from 'react'; 
import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import {Navbar} from 'react-bootstrap';




const Nav = props => {

    const {loggedInDog} = props
    
    return (
        <>
            <div className="simple-flex-row">
            <Link className="left-corner" to="/">Home</Link>
            <Link to="/dogs">Dogs</Link>
            {loggedInDog ? <Link to={`/dogs/${loggedInDog.id}`}>My Profile</Link> : null}
            
            <Link to="/events">Events</Link>
            <Link to="/events/new">Create Event</Link>
            {/* <Link to="/dogs">Followers</Link> */}
            <div className="simple-flex-row right-corner">

            {/* {`Welcome ${loggedInDog.name}  |  Sign Out` } */}
            <Link to="/login">{loggedInDog ? `Follower Count: ${loggedInDog.followers.length} Followee Count: ${loggedInDog.followees.length} ${loggedInDog.name} | id:${loggedInDog.id}  |  Sign Out` : "Sign In" }</Link> 

            </div>
        </div>
        </>

    )
}

export default Nav;


// import { Link } from 'react-router-dom';
// import {Navbar} from 'react-bootstrap';





