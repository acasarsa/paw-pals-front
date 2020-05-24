import React from 'react'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'

const EventCard = (props) => {

    const EventCardWrapper = styled.div`
    /* min-width: 360px;  */
    flex-basis: 27%;
    margin: 10px;
    border: 1px solid brown;
    padding: 5px;
    `;

let history = useHistory()

const {title, image, id, date} = props

    return (
        <EventCardWrapper>
            <h3>{title}</h3>
            <h5>{date}</h5>
            <img src={image} alt=""></img>
            <button>View Details</button>
            <button>Attend</button>
            {/* <button onClick={() => history.push(`/dogs/${id}`)}>Visit {name}!</button> */}
        </EventCardWrapper>
    )
}

export default EventCard

