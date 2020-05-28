import React from 'react'
import DogCard from './DogCard'

const Followers = (props) => {

    // console.log("logged in",props)
    const {loggedInDog} = props


    const renderFollowers = () => {
        loggedInDog.followers.map(follower => <DogCard key={follower.id} {...follower}/>)
    }

    return (
        <div className="simple-flex-row index-wrap">
            {renderFollowers()}
        </div>
    )
}

export default Followers
