import React from 'react'
import styled from 'styled-components';
// import {useHistory} from 'react-router-dom'
// import DogShowPage from './DogShowPage'
// import { Link } from 'react-router-dom';
import {
    Box,
    Card,
    Image,
    Heading,
    Text
  } from 'rebass'




// const DogCardWrapper = styled.div`
//     /* min-width: 360px;  */
//     flex-basis: 27%;
//     margin: 10px;
//     border: 1px solid brown;
//     padding: 5px;
//     `;

const ButtonStyle = styled.div `
    background: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    width: fit-content;
    cursor:  pointer;
    color: white;`

// const ButtonStyle = styled.div `
//     background: palevioletred;
//     font-size: 1em;
//     margin: 1em;
//     padding: 0.25em 1em;
//     border: 2px solid palevioletred;
//     border-radius: 3px;
//     width: fit-content;
//     cursor:  pointer;
//     color: white;        
// `

const DogCard = (props) => {

    const {id, name, breed, status, age, gender, size, image, description, favorite_toy, human, username, password, followers, followees, getSelectedDog} = props

    let selected_dog = {id, name, breed, status, age, gender, size, image, description, favorite_toy, human, username, password, followers, followees}



    return(

        <>
        {/* <DogShowPage  /> */}
        {/* 256, 320 */}
        <Box width={[ 300, 420 ]}>
        <Card
      sx={{
        // backgroundColor: 'gray',
        backgroundImage: 'url(https://source.unsplash.com/random/1024x768?sky)',
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>   
            {/* <h3>{name}</h3> */}
            {/* <h5>"{status}"</h5> */}
            <Image src={image} alt="dog gif"  />
            <Box px={5}/>
            <Heading as='h3'>
            <strong>{name}</strong>
           </Heading>
           <Text fontSize={0}>
          "{status}"
        </Text>
          <center><ButtonStyle onClick={() => {getSelectedDog(selected_dog) 
                                    props.history.push(`/dogs/${id}`)}}
                                    >
                                        
                Visit {name}! 
            </ButtonStyle></center>
            </Card>
            </Box>
     
        </>
        
    )
}


export default DogCard
