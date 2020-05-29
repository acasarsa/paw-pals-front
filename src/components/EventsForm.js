import React from 'react';
import { Redirect } from 'react-router-dom'



class EventsForm extends React.Component {
    state = {
        redirect: false,
        title: '',
        date: '',
        image: '',
        description: ''
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



    eventInfo = (event) => {
        const {value} = event.target
        this.setState({[event.target.name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {title, date, image, description} = this.state
        fetch('http://localhost:3000/api/v1/events', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                title, 
                date,
                image,
                description
            })
        })
        .then(this.setState({
            title:'',
            date:'',
            image:'',
            description:''
        }))
        .then(() => this.setState({ redirect: true }))
    }


    render(){
        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to={`/events/`}/>;
        }
        // console.log(this.state)
        return (
            // 'url(https://source.unsplash.com/random/1024x768?sky)'
            <div style={{backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/51DgB8lONoL._AC_SX522_.jpg'}}>
            <h3><strong>Events Form</strong></h3>
            <br/>
            <form onSubmit={this.handleSubmit}>
            <div>
                <label><strong>Title of Event: </strong></label>
                <input onChange= {this.eventInfo}
                 type="text" name="title" 
                 placeholder="Event Name" 
                 value={this.state.title}
                 />
                 
            </div>
            <div >
                <label><strong>Date:</strong> </label>
                <input 
                onChange= {this.eventInfo} 
                name="date"  
                placeholder="Enter Date"
                value={this.state.date}
                 />
            </div>
            <div>
                <label><strong>Image Url: </strong></label>
                <input 
                onChange= {this.eventInfo} 
                name="image" 
                 placeholder="Image"
                 value={this.state.image} 
                 />
            </div>
            <div>
                
                <label><strong>Description:</strong> </label>
                <textarea rows="4" cols="50" 
                name="description" 
                onChange= {this.eventInfo} 
                placeholder="Description" 
                value={this.state.description}
                />
            </div>
            <button 
            style={this.style()}
            type="submit"
            >Create Event</button>
          
        </form>
            </div>
        )
        
    }
}

export default EventsForm;
/* <div className="simple-flex-row index-wrap"> */