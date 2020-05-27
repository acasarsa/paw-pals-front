import React from 'react'
import DogCard from './DogCard';
// import DogShowPage from './DogShowPage'


// const url = 'http://localhost:3000/api/v1'

const DogIndex = (props) => {
    
    // const [dogs, setDogs] = useState([])

    // useEffect(() => {
    //     fetch(`${url}/dogs`)
    //     .then(r => r.json())
    //     .then(data => setDogs(data.data))
    // }, [])
    console.log('index props', props.data)
    const renderDogCards = () => {
        
        
        const {loggedInDog, loggedInDogFollowees, loggedInDogfollowers, handleFollow, handleUnfollow} = props
            // console.log('index', dogs)
            let dogs = Array.from(props.data)
            return props.data.map(dog => <DogCard key={dog.id} 
                {...dog.attributes}  
                loggedInDog={loggedInDog}
                loggedInDogFollowees={loggedInDogFollowees}
                loggedInDogfollowers={loggedInDogfollowers}
                handleFollow={handleFollow} 
                handleUnfollow={handleUnfollow} /> )
        
        // let dogsAttributes = dogs.data

        // 

    }
    const {dogs, loggedInDog, loggedInDogFollowees, loggedInDogfollowers, handleFollow, handleUnfollow} = props
    if(props){

        console.log(dogs)
    }
    // if (props.data) {

        return(
            
            <div className="index-page" >
                <h1>Dog Index</h1>
                <div className="simple-flex-row index-wrap">
                {/* {renderDogCards()} */}
                </div>
            </div>
        )
    // }
    
    
}


export default DogIndex;