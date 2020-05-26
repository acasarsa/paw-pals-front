import React, {Fragment} from 'react';
import Followers from './Followers'
import DogCard from './DogCard'

const url = 'http://localhost:3000/api/v1'

class DogProfile extends React.Component {

    state = {
        dog: null,
        follow_id: ''
        // followers: [],
    }

    componentDidMount() {
        this.getDogs()
    }

    getDogs = () => {
        fetch(`${url}/dogs/${this.props.match.params.id}`)
            .then(r => r.json())
            .then(dog => this.setState({ dog }), this.renderFollowers())
    }

    renderFollowers = () => {
        
        if (this.state.dog) {
            this.setState({followers: this.state.dog.followers})
            this.state.dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>)
        }

    }

    // dog profile should be renamed to DogShowPage

    handleFollow = (e) => {
        e.preventDefault()
        const {loggedInDog} = this.props
        const {dog} = this.state
        let newFollow = {
            follower_id: loggedInDog.id,
            followee_id: dog.id,
        }
    
        let options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newFollow)
        }
    
        fetch(`${url}/follows`, options)
            .then(r => r.json())
            .then( followObj => {
                this.setState({follow_id: followObj.id})
                let follower_id = followObj.follower_id 
                // console.log("follower_id",followObj.follower_id)
                fetch(`${url}/dogs/${follower_id}`)
                .then( r => r.json())
                .then( newFollower => this.setFollowState(newFollower))
            })
    }

    setFollowState = (newFollower) => {
        const {dog} = this.state
        this.setState({ dog: {...dog, followers: [...dog.followers, newFollower ]}
    })}


// take let id = followobj.follower_id  then do a fetch to that id and 


    handleUnfollow = (id) => {
        console.log("id unfollow",id)
        const {dog} = this.state
        const options = {
            method: 'DELETE'
        }
        fetch(`${url}/follows/${id}`, options)
            .then(r => r.json())
            .then( () => this.setState({
                dog: {...dog, followers: dog.followers.filter((follower) => follower.id !== id )  }, follow_id: ''
        }))
        .catch((error) => {
            console.error('Error:', error);
        });
    }


    
    // need to get 

    /// make it so you can't follow urself. and make it so the follow button 
    // changes to a different form if u already follow them. 





    renderDogProfile = () => {
        if (this.state.dog) {
            console.log("followers off state on DP", this.state.followers) 
            console.log('loggedinDOg', this.props.loggedInDog)
    
        const {name, image, followers} = this.state.dog

        // if (!followers.includes(this.props.loggedInDog.id)) {
                return (
                    <>
                    <div>
                        <h2>Name: {name}</h2>
                        <img src={image}></img>
                        {followers.find((dog) => dog.id === this.props.loggedInDog.id) ?
                            <form >
                                <button onClick={() => this.handleUnfollow(this.state.follow_id)}> Unfollow </button>
                            </form>
                        :
                        <form onSubmit={this.handleFollow}>
                            <button > Follow </button>
                        </form>
                        
                        
                        }
                        
                        <hr></hr>
                        
                        <h1>{name}'s Followers</h1>
                        <div className="simple-flex-row index-wrap">
                            {this.state.dog ?  this.state.dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>) : "failed"}
                        </div>
                    </div>
                    </>
                )
            }
        // } else {
            
        // }
    }

    // why does this work? but if i remove any of it it doesn't work anymore?? it seems like it's repeating itself ??

    /// you need to figure out how this will render. 3 container flex box probably 
    

    render(){

        console.log("follow id",this.state.follow_id)

        return  this.state.dog ? this.renderDogProfile() : <div> No Dog Selected... Try going back to Dogs! </div>

        
    }
}
    

export default DogProfile;


     {/* {this.renderFollowers()} */}
                
            {/* <Followers loggedInDog={this.props.loggedInDog}/> */}