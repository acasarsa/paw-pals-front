import React, {useState, useEffect} from 'react';
import EventCard from './EventCard'
import '../CSS/card.css'
// import EventProfile from './EventProfile'
// import Eventsform from './EventsForm'

const url = 'http://localhost:3000/api/v1'

const EventsIndex = () => {

    const [events, setEvents] = useState([])



    const fetchEvents = () => {
        fetch(`${url}/events`)
        .then(r => r.json())
        .then(data => setEvents(data.data))
    }



    useEffect(() => {
        fetchEvents()
    }, [])

    const renderEventCards = () => {
        if (events) {
            return events.map(event => <EventCard  key={event.id} {...event.attributes}  fetchEvents={fetchEvents} />)
        }
    }
    
        return (
    
            <div className="index-page" >
                <h2 >Play With You Paw Pals</h2>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
                    {renderEventCards()}
                </div>
            </div>
        )
    

}

export default EventsIndex;