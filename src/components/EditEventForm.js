import React from 'react'
// import {useHistory} from 'react-router-dom'

class EditEventForm extends React.Component{
    state = {
        title: '',
        date: '',
        image: '',
        description: ''
    }

    render(){

        // let history = useHistory()

        return (
          <div>
            <h1>Edit Event Form</h1>
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Title of Event: </label>
                <input onChange= {this.eventInfo}
                 type="text" name="title" 
                 placeholder="Event Name" 
                 value={this.state.title}
                 />
                 
            </div>
            <div>
                <label>Date: </label>
                <input 
                onChange= {this.eventInfo} 
                name="date"  
                placeholder="Enter Date"
                value={this.state.date}
                 />
            </div>
            <div>
                <label>Image Url: </label>
                <input 
                onChange= {this.eventInfo} 
                name="image" 
                 placeholder="Image"
                 value={this.state.image} 
                 />
            </div>
            <div>
                <label>Description: </label>
                <textarea rows="4" cols="50" 
                name="description" 
                onChange= {this.eventInfo} 
                placeholder="Description" 
                value={this.state.description}
                />
            </div>
            <button 
            // onClick={() => history.push(`/events/`)}
            type="submit"
            >Edit Event</button>
          
        </form>
        </div>
        )
    }



}

export default EditEventForm 