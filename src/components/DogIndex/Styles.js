import styled from 'styled-components';
import { keyframes } from "styled-components";



export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
    `;

export const reverse = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
    `;

export const Reverse = styled.div`
/*  didn't work but we can figure this out */
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 1rem 1rem;
    font-size: 3.2rem;
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 1rem 1rem;
    font-size: 3.2rem;
`;

export const RainbowText = styled.h1 `  
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0px 0px 20px 0px;
`

export const FlexContainer = styled.div ` 

    display: grid;
    grid-template-columns: auto auto auto;
    align-content: flex-start;
    justify-content: center;
    min-height: 1150px;
    min-width: auto;
    margin-top: 50px;


`
export const FlexItem = styled.div ` 
    padding: 5px;
    width: auto;
    max-height: auto;
    max-width: auto;
    min-width: 500px;
    margin: 10px;
    line-height: auto;
    font-weight: bold;
`

