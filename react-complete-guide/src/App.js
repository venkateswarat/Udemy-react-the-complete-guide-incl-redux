import './App.css';
import React,{Component} from 'react';
import Person from './Person/Person'


class App extends Component{
  state={
    persons:[
      {name:'a',age:28},
      {name:'b',age:29},
      {name:'c',age:30}
    ],
    otherState:"Some value"
  }

  swichNameHandler=(origin)=>{
    // This one dont works
    // this.state.persons=this.state.persons.map(a=>{a.age=a.age+1; return a})
    alert(origin)
    this.setState(this.state.persons.map(a=>{a.age=a.age+1; return a}))
  }

  render(){
    return (<div className="App">
      Hello World
      <br/>
      <button onClick={this.swichNameHandler.bind(this,'app')}>click me</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>a</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.swichNameHandler.bind(this,'person')}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    )
  }
}
export default App;