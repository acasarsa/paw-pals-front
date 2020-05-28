import React, {Fragment} from 'react'
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'
import DogShowPage from './DogShowPage'
import { Link } from 'react-router-dom';




const DogCardWrapper = styled.div`
    /* min-width: 360px;  */
    flex-basis: 27%;
    margin: 10px;
    border: 1px solid brown;
    padding: 5px;
    `;

const DogCard = (props) => {

    // console.log("dogCard props",props)
    const {id, name, breed, status, age, gender, size, image, description, favorite_toy, human, username, password, followers, followees, getSelectedDog} = props
    // size, age, breed, description, favorite_toy, gender, human, 
    // let history = useHistory()

    let selected_dog = {id, name, breed, status, age, gender, size, image, description, favorite_toy, human, username, password, followers, followees}
    // console.log("selectedDog",selected_dog)
    // console.log("dogCard props", props)


    // linkToShowPage = () => {

    // }


    return(

        <>
        {/* <DogShowPage  /> */}
        <DogCardWrapper>
            <h3>{name}</h3>
            <h5>"{status}"</h5>
            <img src={image} alt="dog gif" style={{width: 333, height: 333 }}  ></img>
            <button onClick={() => {getSelectedDog(selected_dog) 
                                    props.history.push(`/dogs/${id}`)}}
                                    >
                                        
                Visit {name}! 
            </button>
        </DogCardWrapper>
        </>
    )
}


export default DogCard
