import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'



    const EventCardWrapper = styled.div`
        /* min-width: 360px;  */
        flex-basis: 27%;
        margin: 20px 0px;
        border: 1px solid palevioletred;
        padding: 5px;
        background: whitesmoke
    `;

    const Button = styled.div `
        background: palevioletred;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        width: fit-content;
        cursor:  pointer;
        color: white;
    
    `


    const Center = styled.div`
        .centered {
        position: fixed;
        top: 50%;
        left: 50%;
        /* bring your own prefixes */
        transform: translate(-50%, -50%);
        }
    `


const EventCard = (props) => {

    console.log("props",props)

    // const handleDelete = () => {
    //     let {id} = props
    //     fetch(`http://localhost:3000/api/v1/events/${id}`, {
    //         method: "DELETE"
    //     })   
    //     // .then(resp => resp.json())
    //     .then(props.fetchEvents)
    // }


    const disableAttend = (event) => {
        event.preventDefault()
        alert("You're in!")
    }




    let history = useHistory()


    const {title, image, id, date} = props
    
    return (
        <center>
        <Center>
        <EventCardWrapper>
            <h3 style={{paddingTop: '20px'}}>{title}</h3>
            <h5>Date: {date}</h5>
            <img src={image} alt="" style={{width: 800, padding: '15px 20px' }}></img>
            <Button  onClick={disableAttend}>Attend!</Button>
            <Button   onClick={() => history.push(`/events/${id}`)}>Get More Details!</Button>
            {/* <Button onClick={handleDelete}  >Delete Event</Button>
            <Button  onClick={() => history.push(`/events/edit/${id}`)}>Edit Event!</Button> */}
            {/* <EditEventForm/> */}
        </EventCardWrapper>
        </Center>
        </center>
    )
}

export default EventCard

