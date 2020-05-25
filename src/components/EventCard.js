import React from 'react'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'

    const EventCardWrapper = styled.div`
        /* min-width: 360px;  */
        flex-basis: 27%;
        margin: 10px;
        border: 1px solid brown;
        padding: 5px;
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
const EventCard = (props) => {

    

    let history = useHistory()

    const {title, image, id, date} = props

    return (
        <EventCardWrapper>
            <h3>{title}</h3>
            <h5>Date: {date}</h5>
            <img src={image} alt=""></img>
            {/* <Button>View Details</Button> */}
            <Button >Attend!</Button>
            <Button onClick={() => history.push(`/events/${id}`)}>Get More Details!</Button>
        </EventCardWrapper>
    )
}

export default EventCard

