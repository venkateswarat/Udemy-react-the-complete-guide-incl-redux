import React,{Component, Fragment} from 'react';
import './Person.css'
import styled from 'styled-components';
import Aux from '../../../hoc/Auxliliary';


const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width:500px){
        width: 450px;
    }
`
class Person extends Component{
    render(){
        console.log('[Person.js] rendering...');
        const style={
            '@media(min-width:500px)':{
                    width: '450px'
            }
        }
        return (<Aux>
                    <p  onClick={this.props.click}>I am {this.props.name}. {this.props.age}  Years. addition {1+2}</p>,
                    <p>{this.props.children}</p>,
                    <input   type="text" onChange={this.props.changed} value={this.props.name}/>
                </Aux>);
                    
    }
    
}
export default Person;