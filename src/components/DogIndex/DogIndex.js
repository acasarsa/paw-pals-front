import React from 'react'
import DogCard from '../DogCardLayout';
// import Filter from './Filter'
import {Container, Row, Col} from 'react-bootstrap'
import * as Style from './Styles'




class DogIndex extends React.Component {
    
    state = {
        followFilter: 'All'
    }

    handleFilterChange = event => {

        this.setState({ followFilter: event.target.value })
    }
    
    renderDogCards = (displayDogs) => {
        
        const {loggedInDog, handleFollow, handleUnfollow, getSelectedDog, selected_dog} = this.props

                return displayDogs.map(dog => <DogCard
                                    history={this.props.history}
                                    key={dog.id} 
                                    {...dog.attributes}  
                                    getSelectedDog={getSelectedDog}
                                    selected_dog={selected_dog}
                                    loggedInDog={loggedInDog}
                                    handleFollow={handleFollow} 
                                    handleUnfollow={handleUnfollow} 
                                    
                                    /> )
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
                {/* <Filter handleFilterChange={this.handleFilterChange} /> */}
                <Container fluid className="show-grid">
                    <Row>
                        <Col> 
                        <Style.Rotate>  🦴 </Style.Rotate><Style.Rotate>  🦴 </Style.Rotate><Style.Rotate>  🦴 </Style.Rotate>
                        </Col>
                        <Col className="d-flex justify-content-lg-center" 
                        >
                        <Style.RainbowText>All Your Paw Pals Are Waiting For You</Style.RainbowText> 
                        </Col>
                        <Col >
                        <Style.Rotate>  🦴 </Style.Rotate><Style.Rotate>  🦴 </Style.Rotate><Style.Rotate>  🦴 </Style.Rotate>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-lg-center">
                        <Style.Rotate>  🐩🦴🐕 </Style.Rotate>
                        </Col>
                    </Row>
                    <Style.FlexContainer >
                        
                        {this.renderDogCards(displayDogs)}
                    
                    </Style.FlexContainer>
                                            
            
                </Container>
    
                </>
            )
        }

}


export default DogIndex;

