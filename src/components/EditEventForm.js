import React from 'react'
import { Redirect } from 'react-router-dom'
// import {useHistory} from 'react-router-dom'

class EditEventForm extends React.Component{
    state = { 
        redirect: null,
        title: this.props.event.data.attributes.title,
        date: this.props.event.data.attributes.date,
        image: this.props.event.data.attributes.image,
        description: this.props.event.data.attributes.description
     }

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

    handleChange = (event) => {
        event.preventDefault()
        let {title, date, image, description} = this.state
        // console.log("title", this.props.title)
        let id = this.props.id
        fetch(`http://localhost:3000/api/v1/events/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                title,
                date,
                image,
                description
            })
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                title: data.title,
                date: data.date,
                image: data.image,
                description: data.description
            })
        })
        .then(() => this.setState({ redirect: true }))
        console.log(this.props.routerProps)
    }


    eventInfo = (event) => {
        const {value} = event.target
        this.setState({[event.target.name]: value})
    }

    render(){
        console.log(this.props)
        let {title, image, date, description} = this.state
        const { redirect } = this.state;
      if (redirect) {
        return <Redirect to={`/events/`}/>;
      }
     return (
          <div>
            <h1>Edit Event Form</h1>
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Title of Event: </label>
                <input onChange= {this.eventInfo}
                 type="text" name="title" 
                 placeholder="Event Name" 
                 value={title}
                 />
                 
            </div>
            <div>
                <label>Date: </label>
                <input 
                onChange= {this.eventInfo} 
                name="date"  
                placeholder="Enter Date"
                value={date}
               
                 />
            </div>
            <div>
                <label>Image Url: </label>
                <input 
                onChange= {this.eventInfo} 
                name="image" 
                 placeholder="Image"
                 value={image} 
            
                 />
            </div>
            <div>
                <label>Description: </label>
                <textarea rows="4" cols="50" 
                name="description" 
                onChange= {this.eventInfo} 
                placeholder="Description" 
                value={description}
                  
                />
            </div>
            <button 
            // onClick={() => history.push(`/events/`)}
            type="submit"
            style={this.style()}
            onClick={this.handleChange}
            >Edit Event</button>
          
        </form>
        </div>
        )
    }



}

export default EditEventForm 