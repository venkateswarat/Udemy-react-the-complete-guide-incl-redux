import './App.css';
import React,{Component} from 'react';
import Person from './Person/Person'


class App extends Component{
  state={
    persons:[
      {name:'a',age:28},
      {name:'b',age:29},
      {name:'c',age:30}
    ]
  }

  swichNameHandler=()=>{
    console.dir(this.state)
  }

  render(){
    return (<div className="App">
      Hello World
      <br/>
      <button onClick={this.swichNameHandler}>click me</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>a</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    )
  }
}
export default App;
