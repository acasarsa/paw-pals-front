import React from 'react'
import EditEventForm from './EditEventForm'
import { Redirect } from 'react-router-dom'


 class EventProfile extends React.Component {
    state = {
        redirect: false,
        event: null,
        mode: false,
        title: '',
        date: '',
        image: '',
        description: ''
    }


    fetchEvent = () => {
        fetch(`http://localhost:3000/api/v1/events/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(event => this.setState({ event: event }))
    }

    componentDidMount(){
      this.fetchEvent()
    }



    handleChange = () => {  
        const {mode} = this.state 
        this.setState({ mode: !mode}) 
        console.log('mode', this.state.mode)
        if(mode === true)
        {
            return <div>
                 <Redirect to='/dogs'/>
            </div>
        }
        else if(mode === false){
            {
                return <button> Close </button>
            }
        }
    }


    renderEventProfile = () => {
        if(this.state.event !== null){
            console.log("event Profile", this.state.event.data.attributes)
        }
        let {title, image, date, description} = this.state.event.data.attributes
    

        return (
             <div>
                <h3>Event: {title}</h3>
                <h3>Date: {date}</h3>
                <img src={image}></img>
                <h3>Details: {description}</h3>
                <button  onClick={this.handleChange}> Edit Event </button>
                <button onClick={this.handleDelete} > Delete Event </button>
            </div>
            )
        
    }


    handleDelete = () => {
        const {id} = this.state.event.data 
        fetch(`http://localhost:3000/api/v1/events/${id}`, {
            method: 'DELETE'
        })
        .then(() => this.setState({ redirect: true }))
        // .then(this.fetchEvent)
    }


    render() {
      console.log(this.state.event)
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/events'/>;
      }
        return this.state.event ? this.renderEventProfile() : null
    }
}


export default EventProfile;
