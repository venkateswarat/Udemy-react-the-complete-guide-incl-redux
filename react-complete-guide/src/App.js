import './App.css';
import React,{Component} from 'react';
import Person from './Person/Person'

class App extends Component{
  state={
    persons:[
      {name:'a',age:28,id:1},
      {name:'b',age:29,id:2},
      {name:'c',age:30,id:3}
    ],
    otherState:"Some value",
    showPersons:false
  }

  nameChangedHandler=(event,id)=>{
    console.log(event.target.value,id)
  }

  deletePersonHandler=(personIndex)=>{
    // const persons = this.state.persons;
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
  togglePersonsHandler=()=>{
    this.setState({showPersons:!this.state.showPersons})
  }

  render(){

    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
    let person=null;
    if(this.state.showPersons){
      person=(
        <div>
          {
            this.state.persons.map((person,index)=>{
              return <Person click={()=>this.deletePersonHandler(index)} key={person.id} name={person.name} age={person.age} changed={((event)=>this.nameChangedHandler(event,person.id))}/>
            })
          }

        </div>
      )
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'lightred',
        color:'black'
      }
    }
    let classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (<div className="App">
      Hello World
      <br/>
      <p className={classes.join(" ")}>Custom CSS with ClassName</p>
      <button  className="button" onClick={()=>{this.togglePersonsHandler()}}>click me</button>
      {person}
    </div>
    )
  }
}
export default App;