import React, {Fragment} from 'react';
// import Followers from './Followers'
import DogCard from './DogCard'

const url = 'http://localhost:3000/api/v1'

class DogProfile extends React.Component {

    state = {
        dog: null,
        // follow_id: ''
        // followers: [],
    }
    

    componentDidMount() {
        this.getDogs()
        // if (this.props.follow_id) {

        //     console.log("follow_id", this.props.follow_id)
        // }
    }

    getDogs = () => {
        fetch(`${url}/dogs/${this.props.match.params.id}`)
            .then(r => r.json())
            .then(dog => this.setState({ dog }), this.renderFollowers())
    }

    
    renderFollowers = () => {

        if (this.state.dog) {
            console.log("followers", this.state.dog.followers)
            // console.log("followers")
            this.state.dog.followers.map(follower => <DogCard key={follower.id} {...follower}/> )
            // this.state.dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>)
            this.props.setFollowID(this.state.dog)
        }

    }


    




    
    // need to get 

    /// make it so you can't follow urself. and make it so the follow button 
    // changes to a different form if u already follow them. 
    // reRenderFollowers = () => {
    //     this.props.followers.map(follower => <DogCard key={follower.id} {...follower}/> )
    //     console.log('hit')
    // }




    renderDogProfile = () => {
        if (this.state.dog) {
            console.log('')
            console.log("dog", this.state.dog)
            console.log("followers off dog", this.state.dog.followers)
            console.log("followers props from A logged in DogP", this.props.follow_id) 
            console.log('loggedinDOg', this.props.loggedInDog)
            // console.log('follow_id in renderDodpr', this.state.follow_id)
    
        const {name, image, followers} = this.state.dog

        // if (!followers.includes(this.props.loggedInDog.id)) {
            // make conditoinal that puts the beloow conditional inside it and hides button if loggedinDog id === this.state.dog.id
                return (
                    <>
                    <div>
                        <h2>Name: {name}</h2>
                        <img src={image}></img>

                        {followers.find((dog) => dog.id === this.props.loggedInDog.id) ?
                            <form>
                                <button onClick={() => this.props.handleUnfollow(this.state.dog)}> Unfollow </button>
                            </form>
                            
                        :
                            <form onSubmit={(event) => this.props.handleFollow(event, this.state.dog)}>
                                <button > Follow </button>
                            </form>
                        
                        /* <form onSubmit={(e) => this.handleFollow(e, this.state.dog)}>
                            <button > Follow </button>
                        </form> */
                        
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

        console.log("props",this.props)
        if (this.state.dog) {

            console.log("state",this.state)
        }

        return  this.state.dog ? this.renderDogProfile() : <div> No Dog Selected... Try going back to Dogs! </div>

        
    }
}
    

export default DogProfile;


     {/* {this.renderFollowers()} */}
                
            {/* <Followers loggedInDog={this.props.loggedInDog}/> */}