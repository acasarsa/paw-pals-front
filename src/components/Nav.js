import React from 'react'; 
import { Link } from 'react-router-dom';


const Nav = props => {

    return (
        <div className="simple-flex-row">
            <Link to="/">Home</Link>
            <Link to="/dogs">Dogs</Link>
            {/* <Link to="/">Profile</Link> */}
            <Link to="/events">Events</Link>
            <Link to="/events/new">Create Event</Link>
            {/* <Link to="/dogs">Followers</Link> */}
            <div className="simple-flex-row right-corner">
                <Link to="/login">{props.logged_in_dog ? "Sign Out" : "Sign In" }</Link>
                
            </div>
        </div>
    )
}

export default Nav;
