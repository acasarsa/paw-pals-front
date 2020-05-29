import React from 'react'; 
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';





const Nav = props => {


    const {loggedInDog} = props

    
    return (
        <>
        <Navbar fixed="top" bg="dark" variant="dark">

            <Navbar.Brand href="/dogs">
            <img
                alt="logo"
                src="%PUBLIC_URL%/pink-paws.svg"
                width="90"
                height="128"
                className="d-inlineb-block align-top"
            />{' '}
            PawPals
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/dogs">Home</Nav.Link>
                    <Nav.Link href="/dogs">Dogs</Nav.Link>
                    
                    { loggedInDog ? <Nav.Link href="/dogs">Dogs</Nav.Link> : null}
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/events/new">Create Event</Nav.Link>
                </Nav>
                <Nav>
                        <Navbar.Text>
                        {loggedInDog ? `Follower Count: ${loggedInDog.followers.length} Followee Count: ${loggedInDog.followees.length} ${loggedInDog.name}` : null } 
                        </Navbar.Text>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
        </>
    )


}

export default Nav;