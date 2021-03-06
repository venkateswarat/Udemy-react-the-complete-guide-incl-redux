import React from 'react';
import './Person.css'

const person =(props)=>{
    const style={
        '@media(min-width:500px)':{
                width: '450px'
        }
    }
    return <div className="Person" style={style}>
                <p onClick={props.click}>I am {props.name}. {props.age}  Years. addition {1+2}</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
}
export default person;