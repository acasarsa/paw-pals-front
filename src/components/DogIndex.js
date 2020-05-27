import React,  {useState, useEffect}  from 'react'
import DogCard from './DogCard';
// import DogProfile from './DogProfile'


const url = 'http://localhost:3000/api/v1'

const DogIndex = () => {
    
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch(`${url}/dogs`)
        .then(r => r.json())
        .then(data => setDogs(data.data))
    }, [])

    const renderDogCards = () => {
        if (dogs) {
            // console.log('index', dogs)
            return dogs.map(dog => <DogCard key={dog.id} {...dog.attributes}  /> )
        }
        // let dogsAttributes = dogs.data

        // 

    }
    
        return(
            
            <div className="index-page" >
                <h1>Dog Index</h1>
                <div className="dropdown">
                    <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="simple-flex-row index-wrap">
                {renderDogCards()}
                </div>
            </div>
        )
    
    
}


export default DogIndex;