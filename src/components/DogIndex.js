import React from 'react';
// import DogCard from './DogCard';



class DogIndex extends React.Component {
   
    render(){
        return (
            <div className="index-page">
                <h3>Dog Index</h3>
                <div className="simple-flex-row index-wrap">
                    {/* {this.state.pets.map(pet => <DogCard key={dog.id} {...pet} />)} */}
                </div>
            </div>
        )
    }

}

export default DogIndex;