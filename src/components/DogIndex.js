import React from 'react'
import DogCard from './DogCardLayout';
import styled from 'styled-components'
import Filter from './Filter'
import {Container, Row, Col, Grid} from 'react-bootstrap'

// const IndexContainer = styled.div `
//     background-image: url(%PUBLIC_URL%/pink-paws.png);
//     background-repeat: repeat-x; 

// `
const RainbowText = styled.h1 `  
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0px 0px 20px 0px;
`


class DogIndex extends React.Component {
    
    state = {
        followFilter: 'All'
    }

    handleFilterChange = event => {

        this.setState({ followFilter: event.target.value })
    }
    
    renderDogCards = (displayDogs) => {
        
        const {loggedInDog, loggedInDogFollowees, loggedInDogfollowers, handleFollow, handleUnfollow, getSelectedDog, selected_dog} = this.props

                return displayDogs.map(dog => <DogCard
                                    history={this.props.history}
                                    key={dog.id} 
                                    {...dog.attributes}  
                                    getSelectedDog={getSelectedDog}
                                    selected_dog={selected_dog}
                                    loggedInDog={loggedInDog}
                                    loggedInDogFollowees={loggedInDogFollowees}
                                    loggedInDogfollowers={loggedInDogfollowers}
                                    handleFollow={handleFollow} 
                                    handleUnfollow={handleUnfollow} /> )
    }

        render () {


            // const {followFilter} = this.state
            // const {loggedInDog} = this.props
            let displayDogs = [...this.props.dogs]
            


            // if( loggedInDog && displayDogs) {

            //     if (followFilter !== "All") {
            //         console.log("displayDogs", loggedInDog)
            //     }
            // } else {
            //     displayDogs = displayDogs
            // }
            
            // if(followFilter === "All") {
            //     // console.log("1",displayDogs.map(dog => dog.id))
            //     // console.log("1,loggedin",loggedInDog.id)
            //     displayDogs = displayDogs
            // } else if (followFilter === "My Followers") {
            //     console.log(followFilter)
            //     // console.log("2",displayDogs.map(dog => dog.id))
            //     // console.log("2-aLoggedin",loggedInDog.id)
            //     // displayDogs = displayDogs.find(dog => (dog.id === loggedInDog.id) ? dog.attributes.followers : dog)
            // } else if (followFilter === "Who I Follow") {
            //     displayDogs = displayDogs.find(dog => (dog.id === loggedInDog.id) ? dog.attributes.followees : dog)
            // }

        // if i select my followers i want to look through the array of dogs and find the loggedInDog 
        // if dog.id === loggedInDog.id then show dog.attributes.followers


            return (
                <>
                <Filter handleFilterChange={this.handleFilterChange} />
                <Container fluid className="show-grid">
                    <Row>
                        <Col className="d-flex justify-content-lg-center" 
                        >
                        <RainbowText>All Your Paw Pals Are Waiting For You</RainbowText>
                        </Col>
                    </Row>
                    <div className="index-page" >
                    
                        <div className="simple-flex-row index-wrap">
                        {this.renderDogCards(displayDogs)}
                        </div>
                    </div>
                                            
            
                </Container>
    
                </>
            )
        }

}


export default DogIndex;

