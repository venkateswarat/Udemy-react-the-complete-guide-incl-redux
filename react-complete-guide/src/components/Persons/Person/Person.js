import React from 'react';
import './Person.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width:500px){
        width: 450px;
    }
`
const person =(props)=>{
    console.log('[Person.js] rendering...');
    const style={
        '@media(min-width:500px)':{
                width: '450px'
        }
    }
    return (   <StyledDiv>
                <p onClick={props.click}>I am {props.name}. {props.age}  Years. addition {1+2}</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
                </StyledDiv>)
}
export default person;