import React, {Fragment} from 'react';
import Followers from './Followers'
import DogCard from './DogCard'

const url = 'http://localhost:3000/api/v1'

class DogProfile extends React.Component {

    state = {
        dog: null
    }

    componentDidMount() {
        fetch(`${url}/dogs/${this.props.match.params.id}`)
            .then(r => r.json())
            .then(dog => this.setState({ dog: dog}), this.renderFollowers() )
    }

    
    // displayFollowerCount() => {

    // }

    // dog profile should be renamed to DogShowPage

    renderFollowers = () => {
        if (this.state.dog) {
            this.state.dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>)
        }
    }

    renderDogProfile = () => {
        if (this.state.dog) {
            console.log("followers off state on DP", this.state.dog.followers)
        }
    
        const {name, image} = this.state.dog

        return (
            <>
            <div>
                <h2>Name: {name}</h2>
                <img src={image}></img>
                <hr></hr>
                <h1>{name}'s Followers</h1>
                <div className="simple-flex-row index-wrap">
                {this.state.dog ?  this.state.dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>) : "Be this pupperinos first follower!"}
                </div>
        
            </div>
            </>
        )
    }

    /// you need to figure out how this will render. 3 container flex box probably 
    

    render(){
        console.log("props in dog P", this.props.loggedInDog)
        

        return  this.state.dog ? this.renderDogProfile() : <div> No Dog Selected... Try going back to Dogs! </div>

        
    }
}
    

export default DogProfile;


     {/* {this.renderFollowers()} */}
                
            {/* <Followers loggedInDog={this.props.loggedInDog}/> */}