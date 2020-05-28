import React from 'react'; 
import { Link } from 'react-router-dom';


const Nav = props => {

    
    return (
        <div className="simple-flex-row">
            <Link className="left-corner" to="/">Home</Link>
            <Link to="/dogs">Dogs</Link>
            {props.loggedInDog ? <Link to={`/dogs/${props.loggedInDog.id}`}>My Profile</Link> : null}
            
            <Link to="/events">Events</Link>
            {/* <Link to="/dogs">Followers</Link> */}
            <div className="simple-flex-row right-corner">
            {props.loggedInDog ? <Link to="/login">{`Welcome ${props.loggedInDog.name} | Sign Out`}</Link> : <Link to="/login">Sign In</Link>}
            </div>
        </div>
    )
}

export default Nav;
