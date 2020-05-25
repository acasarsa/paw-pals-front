import React, {useState, useEffect} from 'react';
import EventCard from './EventCard'

const url = 'http://localhost:3000/api/v1'

const EventsIndex = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(`${url}/events`)
            .then(r => r.json())
            .then(data => setEvents(data.data))
    }, [])

    const renderEventCards = () => {
        if (events) {
            return events.map(event => <EventCard key={event.id} {...event.attributes}/>)
        }
    }

        return (
            <div className="index-page">
                <h3>Events Index</h3>
                <div className="simple-flex-row index-wrap">
                {renderEventCards()}
                </div>
            </div>
        )
    

}

export default EventsIndex;