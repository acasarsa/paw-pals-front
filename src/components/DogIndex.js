import React from 'react'
import DogCard from './DogCard';
// import DogShowPage from './DogShowPage'



const DogIndex = (props) => {
    
    state = {
        followFilter: 'All'
    }

    handleFilterChange = event => {

        this.setState({ followFilter: event.target.value })
    }
    
    console.log('index props', props)
    const renderDogCards = () => {
        
        const {dogs, loggedInDog, loggedInDogFollowees, loggedInDogfollowers, handleFollow, handleUnfollow, getSelectedDog, selected_dog} = props
            // console.log('index', dogs)
                return dogs.map(dog => <DogCard
                                    history={props.history}
                                    key={dog.id} 
                                    {...dog.attributes}  
                                    getSelectedDog={getSelectedDog}
                                    selected_dog={selected_dog}
                                    loggedInDog={loggedInDog}
                                    loggedInDogFollowees={loggedInDogFollowees}
                                    loggedInDogfollowers={loggedInDogfollowers}
                                    handleFollow={handleFollow} 
                                    handleUnfollow={handleUnfollow} /> )
    }
        return(

            <div className="index-page" >
                <h1>Dog Index</h1>
                <div className="simple-flex-row index-wrap">
                {renderDogCards()}
                </div>
            </div>
        )
}


export default DogIndex;