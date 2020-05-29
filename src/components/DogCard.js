import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';





const DogCardWrapper = styled.div`
    flex-basis: 27%;
    margin: 10px;
    border: 1px solid brown;
    padding: 5px;
    `;

const ButtonStyle = styled.div `
    background: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    width: fit-content;
    cursor:  pointer;
    color: white;        
`

const DogCard = (props) => {

    const {id, name, breed, status, age, gender, size, image, description, favorite_toy, human, username, password, followers, followees, getSelectedDog} = props

    let selected_dog = {id, name, breed, status, age, gender, size, image, description, favorite_toy, human, username, password, followers, followees}



    return(

        <>
        <DogCardWrapper>
            <h3>{name}</h3>
            <h5>"{status}"</h5>
            <img src={image} alt="dog gif"  ></img>
            <center><ButtonStyle onClick={() => {getSelectedDog(selected_dog) 
                                    props.history.push(`/dogs/${id}`)}}
                                    >
                                        
                Visit {name}! 
            </ButtonStyle>{' '}</center>
        </DogCardWrapper>
        </>
    )
}


export default DogCard
