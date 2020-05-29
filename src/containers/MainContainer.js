import React  from 'react'
import Auth from '../components/Auth'




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





    render(){

        const {events, dogs, current_user} = this.state

        return(
        <div>
            <h1>Home Page</h1>
            {/* <DogIndex dogs={dogs} /> */}




            {/* ///////////////// events ///////// */}
            {/* <EventsIndex current_user={current_user} events={events} /> */}


        </div>
        )
     
    }
}

  export default MainContainer

  //MainContainer is the homepage (LoginPage)
  // 
  