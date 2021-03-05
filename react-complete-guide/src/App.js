import './App.css';
import React,{Component} from 'react';
import Person from './Person/Person';
import {useState} from 'react';

const App=()=>{
  const [personsState, setPersonsState]=useState({
    persons:[
      {name:'a',age:28},
      {name:'b',age:29},
      {name:'c',age:30}
    ],
    otherState:"Some value"
  })
  const [otherState, setOtherState]=useState("Some value")
  const swichNameHandler=()=>{
    // This one dont works
    // this.state.persons=this.state.persons.map(a=>{a.age=a.age+1; return a})
  // debugger
  // console.log();
    setPersonsState({persons:personsState.persons.map(a=>{a.age=a.age+1; return a})})
  }

    return (<div className="App">
      Hello World
      <br/>
      <button onClick={swichNameHandler}>click me</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>a</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
    )
}
export default App;