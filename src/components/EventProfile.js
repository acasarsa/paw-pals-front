import React from 'react'
import EditEventForm from './EditEventForm'
import { Redirect } from 'react-router-dom'
import DogCard from './DogCard'


 class EventProfile extends React.Component {
    state = {
        redirect: false,
        event: null,
        mode: false,
        id: this.props.match.params.id,
        title: '',
        date: '',
        image: '',
        description: '',
    }


    fetchEvent = () => {
        fetch(`http://localhost:3000/api/v1/events/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(event => this.setState({ event: event }))
    }

    componentDidMount(){
      this.fetchEvent()
    }

    // handleClick = () => {
    //     const {mode} = this.state 
    //     this.setState({mode: !mode})
    //     console.log('mode:', this.state.mode)
    // }

    saveChanges = (event) => {
        event.preventDefault()
        const {mode} = this.state 
        this.setState({mode: !mode})
    }




    renderEventProfile = () => {
        // if(this.state.event !== null){
        //     console.log("event Profile", this.state.event.data.attributes)
        // }
        let {title, image, date, description} = this.state.event.data.attributes
        let dogs = this.state.event.data.attributes.dogs
        let attendee = dogs.map((dog) => {
            return [dog.name]
        })
           
        return (
             <div>
                <h3>Event: {title}</h3>
                <h3>Date: {date}</h3>
                <img src={image} alt="" style={{width:800}} ></img>
                <h3>Details: {description}</h3>
                <h3>Attending: </h3>
                <br/>
                 { this.state.mode?  null : <button onClick={this.saveChanges}> Edit Event </button> }
                <button onClick={this.handleDelete} > Delete Event </button>
                { this.state.mode ?  <EditEventForm  {...this.state} /> : null}
            
            </div>
            )
        
    }


    handleDelete = () => {
        const {id} = this.state.event.data 
        fetch(`http://localhost:3000/api/v1/events/${id}`, {
            method: 'DELETE'
        })
        .then(() => this.setState({ redirect: true }))
    }


    render() {
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/events/'/>;
      }
        return this.state.event ? this.renderEventProfile() : null
    }
}


export default EventProfile;


// let {title, image, date, description} = this.state.event.data.attributes
// const id = this.props.match.params.id
// fetch(`http://localhost:3000/api/v1/events/${id}`,{
//     method: "PATCH",
//     headers: {
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify({
//         title, 
//         image,
//         date,
//         description
//     })
// })

    // changeInfo = (event) => {
    //     const {value} = event.target
    //     this.setState({
    //         [event.target.name]: value
    //     })
    // }

    // (
    //     <div>
    //         <EditEventForm/>
    //         <button> Close</button>
    //     </div>
    // )