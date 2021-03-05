import './App.css';
import React,{Component} from 'react';
import Person from './Person/Person'


class App extends Component{
  render(){
    return (<div className="App">
      Hello World
      <Person name="a" age="1">a</Person>
      <Person name="b" age="2"/>
      <Person name="c" age="3"/>
    </div>
    )
  }
}
export default App;
