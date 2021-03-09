import classes from './App.css';
import React,{Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component{
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state={
    persons:[
      {name:'a',age:28,id:1},
      {name:'b',age:29,id:2},
      {name:'c',age:30,id:3}
    ],
    otherState:"Some value",
    showPersons:false,
    showCockpit:true
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>

        </div>
      )
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'lightred',
        color:'black'
      }
    }
    
    return (<div className={classes.App}>
      <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
     {this.state.showCockpit?
       <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} personsLength={this.state.persons.length} clicked={this.togglePersonsHandler}/>
       :null
     }
      {person}
    </div>
    )
  }
}
export default App;