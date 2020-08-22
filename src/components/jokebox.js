import React from 'react';
import Styled from 'styled-components'


const Sjokebox = Styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 200px;
    border: solid 3px red;
    padding: 50px;
    font-weight: 700;
    font-size: 20px;

`

const Jokebox = ({joke}) => {
    return(
        <div>
            <Sjokebox>{joke.value}</Sjokebox>
        </div>
    )
}

export default Jokebox;