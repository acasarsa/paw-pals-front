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
    /* display: gird;
    grid-template-columns: auto auto auto;
    align-content: flex-start;
    padding: 0;
    margin: auto;
    height: auto;
    border: black solid 1px;
    width: auto;
    min-height: 1150px; */
    display: grid;
    grid-template-columns: auto auto auto;
    /* width: 50em; */
    align-content: flex-start;
    justify-content: center;
    /* border: solid rgba(69, 250, 13, 0.7); */
    /* background-color: rgba(0,0,0,.5); */
    min-height: 1150px;
    min-width: auto;
    margin-top: 50px;


`
export const FlexItem = styled.div ` 
    /* border: black solid 1px; */
    /* background: blue; */
    padding: 5px;
    width: auto;
    max-height: auto;
    max-width: auto;
    min-width: 500px;
    margin: 10px;
    line-height: auto;
    font-weight: bold;
    /* font-size: 3em; */
`

