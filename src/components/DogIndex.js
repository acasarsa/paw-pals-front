import React from 'react';
import DogCard from './DogCard';
// import DogProfile from './DogProfile'



class DogIndex extends React.Component {
   
    render(){
        return (
            <div className="index-page">
                <h3>Dog Index</h3>
                <div className="simple-flex-row index-wrap">
                    {this.state.pets.map(pet => <DogCard  />)}
                </div>
            </div>
        )
    }

}

export default DogIndex;