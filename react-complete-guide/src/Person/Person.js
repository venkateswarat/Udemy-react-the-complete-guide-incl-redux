import React from 'react';
const person =(props)=>{
    return <div>
                <p>I am {props.name}. {props.age}  Years. addition {1+2}</p>
                <p>{props.children}</p>
            </div>
}
export default person;