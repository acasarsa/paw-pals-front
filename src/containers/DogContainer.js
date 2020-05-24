import React,  {useState, useEffect}  from 'react'
import DogCard from '../components/DogCard'

const url = 'http://localhost:3000/api/v1'

const DogContainer = () => {
    
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch(`${url}/dogs`)
        .then(r => r.json())
        .then(data => console.log("data",data))
    })

        return(
            
            <div>
                {/* <DogCard/> */}
            </div>
        )
    
    
}

export default DogContainer