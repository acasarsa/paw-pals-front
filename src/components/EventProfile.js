import React, { Component } from 'react'


export default class EventProfile extends Component {
    state = {
        event: null
    }
    
    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/events/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(event => this.setState({ event: event }))
    }

    renderEventProfile = () => {
        if(this.state.event){
            console.log("event Profile", this.state.event)
        }
        let {title, image, date, description} = this.state.event
        return (
             <div>
                <h3>Event: {title}</h3>
                <h3>Date: {date}</h3>
                <img src={image}></img>
                <p>Details: {description}</p>
            </div>
            )
        
    }

    render() {
        return this.state.event ? this.renderEventProfile() : <h3>FAILED</h3> 
    }
}



