import React, {Fragment} from 'react'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';



const DogCardWrapper = styled.div`
    /* min-width: 360px;  */
    flex-basis: 27%;
    margin: 10px;
    border: 1px solid brown;
    padding: 5px;
    `;

const DogCard = (props) => {

    const {id, name, image, status } = props
    // size, age, breed, description, favorite_toy, gender, human, 
    let history = useHistory()

    
    return(

        <>
        <DogCardWrapper>
            <h3>{name}</h3>
            <h5>"{status}"</h5>
            <img src={image} alt="dog gif"></img>
            <button onClick={() => history.push(`/dogs/${id}`)}  >
                Visit {name}! 
            </button>
        </DogCardWrapper>
        </>
    )
}


export default DogCard
