import React from 'react'; 
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';





// const Nav = props => {


//     const {loggedInDog} = props

    
//     return (
//         <>
//         <Navbar fixed="top" bg="dark" variant="dark">

//             <Navbar.Brand href="/dogs">
//             <img
//                 alt="logo"
//                 src="%PUBLIC_URL%/pink-paws.svg"
//                 width="90"
//                 height="128"
//                 className="d-inlineb-block align-top"
//             />{' '}
//             PawPals
//             </Navbar.Brand>

//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <Nav.Link href="/dogs">Home</Nav.Link>
//                     <Nav.Link href="/dogs">Dogs</Nav.Link>
                    
//                     { loggedInDog ? <Nav.Link href="/dogs">Dogs</Nav.Link> : null}
//                     <Nav.Link href="/events">Events</Nav.Link>
//                     <Nav.Link href="/events/new">Create Event</Nav.Link>
//                 </Nav>
//                 <Nav>
//                     { loggedInDog ? 

//                         <Navbar.Text>
//                         `Following ${loggedInDog.followees.length} dogs`
//                         </Navbar.Text>

//                         <Navbar.Text>
//                             Signed in as: <a href="/login"> {loggedInDog.name} </a>
//                         </Navbar.Text>
//                             : 
//                         <Navbar.Text>
//                             Login
//                         </Navbar.Text>
                        
                        
//                     }
//                 </Nav>
                
//             </Navbar.Collapse>
//         </Navbar>
//         </>
//     )


// }

// export default Nav;

import React from 'react'; 
import {Navbar, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'




const Nav = props => {

    const {loggedInDog} = props
    
    return (
        <>
        <Container>

        
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
                    <LinkContainer to="/dogs"> <button>TEST</button> </LinkContainer>

                    <Nav.Link href="/dogs">Home</Nav.Link>
                    <Nav.Link href="/dogs">Dogs</Nav.Link>

                    { loggedInDog ? <Nav.Link href="/dogs">My Profile</Nav.Link> : null}
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/events/new">Create Event</Nav.Link>
                </Nav>


                
            </Navbar.Collapse>
        </Navbar> 
        </Container>
        </>

    )
}

export default Nav;




{/* <Nav.Link href="login"> {loggedInDog ? "Sign Out" : "Sign In" }  </Nav.Link> */}


