import './App.css';
import React,{Component} from 'react';
import Person from './Person/Person'


class App extends Component{
  render(){
    return (<div className="App">
      Hello World
      <Person/>
      <Person/>
      <Person/>
    </div>
    )
  }
}
export default App;
