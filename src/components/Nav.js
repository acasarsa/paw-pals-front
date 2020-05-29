import React from 'react'; 
import '../CSS/navbar.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const TopNav = styled.div `
    overflow: hidden;
    background-color: black;
    margin-top: 0px;
`

// const HoverLink = styled.StyledLink

const StyledLink = styled(Link) `
    float: left;
    display: block;
    color: palevioletred;
    text-align: center;
    padding: 24px 6px;
    text-decoration: none;
    font-size: 17px;

`

const StyledLinkRight = styled(Link) `
    float: right;
    display: block;
    color: palevioletred;
    text-align: center;
    padding: 24px 16px;
    text-decoration: none;
    font-size: 17px;
`

const StyledInput = styled.input ` 
    float: right;
    padding: 6px;
    margin-top: 18px;
    margin-right: 16px;
    border: none;
    font-size: 17px;
    background: papayawhip;
`

const FollowCounter = styled.div ` 
    float: right;
    display: block;
    color: palevioletred;
    text-align: center;
    padding: 24px 16px;
    text-decoration: none;
    font-size: 17px;
`

const PawPals = styled.div ` 
    float: left;
    display: block;
    color: palevioletred;
    text-align: center;
    padding: 14px 20px 14px 29px; 
    text-decoration: none;
    font-size: 25px;
`




const Nav = props => {

    const {loggedInDog, search, handleSearch} = props
    
    return (

        <TopNav >
                        
            <PawPals to="/">PawPals  </PawPals>

            <StyledLink to="/dogs">Find Friendos</StyledLink>
            {/* {props.loggedInDog ? <StyledLink to={`/dogs/${props.loggedInDog.id}`}>My Profile</StyledLink> : null} */}
            <StyledLink to="/events">Let's Play Together</StyledLink>
            <StyledLink to="/events/new">Throw A Party!</StyledLink>

            

            <StyledInput 
                type="text" 
                value={search} 
                onChange={(e)=>handleSearch(e)} 
                placeholder="Search..." ></StyledInput> 

            <StyledLinkRight to="/login"> 
                {
                    props.loggedInDog 
                    ?  "Sign Out" 
                    : "Please Sign In" 
                }
            </StyledLinkRight> 
            
            <FollowCounter>
                {
                    loggedInDog 
                    ? `
                    ${loggedInDog.status}!! 
                    Hi ${loggedInDog.name}  
                    |  Follower Count: ${loggedInDog.followers.length}  
                    |  Followee Count: ${loggedInDog.followees.length}` 
                    : null
                } 
            </FollowCounter>
            
        </TopNav>


            
        

    )
}

export default Nav;





// import { Link } from 'react-router-dom';
// import {Navbar} from 'react-bootstrap';





