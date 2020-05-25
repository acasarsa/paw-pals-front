import React  from 'react'
const url = 'http://localhost:3000/api/v1'

class MainContainer extends React.Component {

    state = {
        dogs: [],

///////////current_user ////////
        current_user: '',
///////////////// events /////////

        events: [],
    }
///////////////// events fetching etc /////////






/////////// dogs fetching etc

    componentDidMount() {
        fetchDogs()
        this.fetchEvents()
    }
    
    fetchDogs = () => {
        fetch(`${url}/dogs`)
            .then(r => r.json())
            .then(data => this.setState({ dogs: data.data}))
    }
    
    fetchEvents = () => {
        fetch(`${url}/events`)
            .then(r => r.json())
            .then(data => this.setState({ events: data.data}))
    }



    render(){

        const {events, dogs, current_user} = this.state

        return(
        <div>
            <h1>Home Page</h1>
            <DogIndex dogs={dogs} current_user={current_user} />




            {/* ///////////////// events ///////// */}
            <EventsIndex current_user={current_user} events={events} />


        </div>
        )
     
    }
}

  export default MainContainer