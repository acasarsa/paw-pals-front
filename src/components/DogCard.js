import React from 'react'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'


const DogCardWrapper = styled.div`
    /* min-width: 360px;  */
    flex-basis: 27%;
    margin: 10px;
    border: 1px solid brown;
    padding: 5px;
    `;

const DogCard = (props) => {

    const {id, name, image, status, handleSubmit } = props
    // size, age, breed, description, favorite_toy, gender, human, 
    let history = useHistory()

    
    return(
        <DogCardWrapper>
            <h3>{name}</h3>
            <h5>"{status}"</h5>
            <img src={image} alt="dog gif"></img>
            <button onClick={() => history.push(`/dogs/${id}`)}>Visit {name}!</button>
        </DogCardWrapper>
        
    )
}


export default DogCard

// age: "puppy"
// breed: "Appenzeller"
// description: "long boi"
// favorite_toy: "stuffed eagle"
// followees: [{…}]
// followers: []
// gender: "Male"
// human: "Sadie"
// image: "https://cdn2.thedogapi.com/images/rkq57TpVm.gif"
// name: "Jasmine"
// password: "123"
// size: "medium"
// status: "bow wow"
// username: "illustrious gog"