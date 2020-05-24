import React from 'react';
const url = 'http://localhost:3000/api/v1'

class DogProfile extends React.Component {

    state = {
        dog: null
    }

    componentDidMount() {
        fetch(`${url}/dogs/${this.props.match.params.id}`)
            .then(r => r.json())
            .then(dog => this.setState({ dog: dog}))
    }

    // displayFollowerCount() => {

    // }

    renderDogProfile = () => {
        if (this.state.dog) {
            console.log("not null test",this.state.dog)
        }
    
        const {name, image} = this.state.dog

        return (
            <div>
                <h2>Name: {name}</h2>
                <img src={image}></img>
            </div>
        )
    }
    

    render(){
        console.log("profile",this.props)

        return  this.state.dog ? this.renderDogProfile() : <div> No Dog Selected... Try going back to Dogs! </div>

        
    }
}
    

export default DogProfile;