import React from 'react';
import Styled from 'styled-components'

const Sname = Styled.p`
    color: blue;
    font-size: 40px;
    font-weight: bold;
`

const Name = () => {
    return(
        <div>
            <Sname>Chuk's joke</Sname>
        </div>
    )
}

export default Name;