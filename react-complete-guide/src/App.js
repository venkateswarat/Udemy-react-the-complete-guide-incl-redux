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

  nameChangedHandler=(event)=>{
    console.log(event.target.value)
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
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    let person=null;
    if(this.state.showPersons){
      person=(
        <div>
          {
            this.state.persons.map((person,index)=>{
              return <Person click={()=>this.deletePersonHandler(index)} name={person.name} age={person.age}/>
            })
          }

        </div>
      )
    }
    return (<div className="App">
      Hello World
      <br/>
      <button style={style} onClick={()=>{this.togglePersonsHandler()}}>click me</button>
      {person}
    </div>
    )
  }
}
export default App;