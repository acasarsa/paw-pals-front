import React from 'react';
// import Followers from './Followers'
import DogCard from './DogCardLayout'
// import DogCard from './DogCard'
import {Container, Row, Col} from 'react-bootstrap'




class DogShowPage extends React.Component {

    style =  () =>  {
        return {
    background: 'palevioletred',
    fontSize: '1em',
    margin: '1em',
    padding: '0.25em 1em',
    border: "2px solid palevioletred",
    borderRadius: "3px",
    width: "fit-content",
    cursor:  "pointer",
    color: "white"
    }
}



    componentDidMount() {
        this.renderDogShowPage()

    }

    // need to get 

    /// make it so you can't follow urself. and make it so the follow button 
    // changes to a different form if u already follow them. 
    // reRenderFollowers = () => {
    //     this.props.followers.map(follower => <DogCard key={follower.id} {...follower}/> )
    //     console.log('hit')
    // }

    componentWillUpdate(){
        this.renderDogShowPage()
    }



    renderDogShowPage = () => {

            // console.log('Show Page props', this.props)
            // console.log("dog", this.props.dogs)
            // console.log("followers off dog", this.props.dog.followers)
            // console.log("followers props from A logged in DogP", this.props.follow_id) 
            console.log('loggedinDOg', this.props.loggedInDog)
            // console.log('follow_id in renderDodpr', this.state.follow_id)

        const {name, image, followers, id} = this.props.selected_dog
        const {selected_dog, handleFollow, handleUnfollow, loggedInDog} = this.props
        console.log("followers Show", followers);

        
        let follower_id = loggedInDog.id
        let followee_id = selected_dog.id
        // could make a list of the follower count

        // if (!followers.includes(this.props.loggedInDog.id)) {
            // make conditoinal that puts the beloow conditional inside it and hides button if loggedinDog id === this.state.dog.id
                if (selected_dog) {


                    
                    return (
                        
                        <>
                        {/* <button style={this.style()}  onClick={() => this.props.history.goBack()} >Go Back</button> */}
                        
                        { (loggedInDog.id ===  selected_dog.id) ? 
                        
                            <div>
                            <h1>My Profile</h1>
                            <h2>Name: {name}</h2>
                            <img src={image} alt="dog"></img>
                            
                            <div>
                                <strong>  Follow Count: {selected_dog.followers.length}</strong>
                            </div>
                            <button onClick={() => this.props.history.goBack()} >Go Back</button>
                            <hr></hr>
                            
                            <h1>{name}'s Followers</h1>
                            <div className="simple-flex-row index-wrap">
                                {loggedInDog ? selected_dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>) : "failed"}
                            </div>
                        </div>

                        :
                        <div>
                            <h2>Name: {name}</h2>
                            <img src={image} alt="dog"></img>
                            
                            <div>
                                Follow Count: {selected_dog.followers.length}
                            </div>

                            {followers.find((dog) => dog.id === loggedInDog.id) ?
                            <h4> {selected_dog.name} is your Paw Pal! </h4>

                            
                            :
                            <form onSubmit={(event) => handleFollow(event, selected_dog)}>
                                <button style={this.style()}  > Follow </button>
                            </form>
                
                
                                }
                            
                            <hr></hr>
                            
                            <h1>{name}'s Followers</h1>
                            <div className="simple-flex-row index-wrap">
                                {selected_dog ?  selected_dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>) : "failed"}
                            </div>
                        </div>
                        
                        }
                        
                        </>
                    )
                } else {
                    return (
                        <>
                            <h3>Go back and select a dog!</h3>
                            <button style={this.style()}  onClick={() => this.props.history.push('/dogs')}>Dog Index</button>
                        </>
                        ) 
                }
    
    }
    

    // why does this work? but if i remove any of it it doesn't work anymore?? it seems like it's repeating itself ??

    /// you need to figure out how this will render. 3 container flex box probably 
    

    render(){

        // console.log("ShowPage props",this.props)

        // if (this.props) {console.log("is dog a prop?",this.props.dog)}
        

            return  ( this.renderDogShowPage() )
        

        
    }
}
    

export default DogShowPage;

{/* <form>
<button onClick={() => handleUnfollow(followee_id, follower_id)}> Unfollow </button>
</form> */}