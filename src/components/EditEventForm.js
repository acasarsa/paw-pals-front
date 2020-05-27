import React from 'react'
// import {useHistory} from 'react-router-dom'

class EditEventForm extends React.Component{
    state = { 
        // id: 56,
        title: '',
        date: '',
        image: '',
        description: ''
     }

    // handleChange = (event) => {
    //     event.preventDefault()
    //     let {id, title, date, image, description} = this.state.data.attributes
        
    //     fetch(`http://localhost:3000/api/v1/events/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-type':'application/json'
    //         },
    //         body: JSON.stringify({
    //             title,
    //             date,
    //             image,
    //             description
    //         })
    //     })
    // }


    // eventInfo = (event) => {
    //     const {value} = event.target
    //     this.setState({[event.target.name]: value})
    // }

    render(){

        let {title, image, date, description} = this.state.event.data.attributes
    
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
            onClick={this.handleChange}
            >Edit Event</button>
          
        </form>
        </div>
        )
    }



}

export default EditEventForm 