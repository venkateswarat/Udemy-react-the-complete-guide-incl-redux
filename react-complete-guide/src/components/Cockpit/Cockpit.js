import React,{useEffect} from 'react';
import classes from './Cockpit.css'
const Cockpit = (props)=>{

    // this one run every run cycle
    // this one will run for every update
    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      setTimeout(()=>{
        alert('Saved data to cloud!')
      },1000);
    },[]);
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
            <br/>{props.title}
            <p className={assignedclasses.join(" ")}>Custom CSS with ClassName</p>
            <button  className={classes.Button} onClick={()=>{props.clicked()}}>click me</button>
        </div>
        );
}
export default Cockpit;