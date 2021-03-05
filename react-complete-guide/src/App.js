import './App.css';
import React,{Component} from 'react';
//function App() {
  // return (
  //   <div className="App">
  //     Hello World
  //   </div>
  // );
//}

class App extends Component{
  render(){
    // return React.createElement('div', null,'h1','Hello World123')
    return React.createElement('div', null,React.createElement('h1',null,'Hello World123'))
  }
}
export default App;
