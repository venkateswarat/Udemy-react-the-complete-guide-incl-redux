import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props)=>{

    let assignedclasses=[];

    let btnClass='';
    if(props.showPersons){
        btnClass=classes.Red;    
    }
    
    if(props.persons.length<=2){
      assignedclasses.push(classes.red);
    }
    if(props.persons.length<=1){
      assignedclasses.push(classes.bold);
    }

    return (
        <div> Hello World
            <br/>
            <p className={assignedclasses.join(" ")}>Custom CSS with ClassName</p>
            <button  className={classes.Button} onClick={()=>{props.clicked()}}>click me</button>
        </div>
        );
}
export default cockpit;