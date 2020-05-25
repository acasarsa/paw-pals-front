import React from 'react'; 
import { Link, NavLink } from 'react-router-dom';


const Nav = props => {
    return (
        <div className="simple-flex-row">
            <Link to="/">Home</Link>
            <Link to="/dogs">Dogs</Link>
            <Link to="/"> Profile</Link>
            <Link to="/">Followers</Link>
            <Link to="/">Events</Link>
            <div className="simple-flex-row right-corner">
                <Link to="/login">Log Out</Link>
            </div>
        </div>
    )
}

export default Nav;
