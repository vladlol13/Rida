import React from 'react';
import styled from 'styled-components';
import Button from '../components/button'

const Joke = styled.div`
    display: flex;
    width: 600px;
    min-height: 40px;
    border: 1.5px solid orange;
    margin-top: 10px;
`

const JokeContent = styled.div`
    width: 80%;
    
`

const Delete = styled.div`
    background-color: blue;
    color: white;
    width: 20%;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: black;
    }
`


export default ({jokes, deleteFavJoke, clearAllHandler}) => {
    return(
        <React.Fragment>
            {jokes.map((joke) => {
                return(
                    <Joke key={joke.id}>
                        <JokeContent>{joke.value}</JokeContent>
                        <Delete onClick={() => deleteFavJoke(joke)}>Delete</Delete>
                    </Joke>
                )
            } )}
            <Button onClick = {clearAllHandler}>Clear all</Button>
            
        </React.Fragment>
    )
}