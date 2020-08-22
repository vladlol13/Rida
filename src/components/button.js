import styled from 'styled-components';


const Sbutton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: pink;
    border: solid red 2px;
    cursor: pointer;
    margin: 5px;
    height: 40px;
    width: 200px;
    &:hover {
        background-color:red;
    }
`


export default Sbutton;