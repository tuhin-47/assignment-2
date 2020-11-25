import React from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import Validation from './Validation/Validation';

class App extends React.Component{
  
  state = {
    inputMsg:'',
    inputLength: 0,
  };

  inputHandler = (event)=>{
    this.setState({
      inputMsg:event.target.value,
      inputLength: event.target.value.length
    });
  }

  charClickHandler = (event,index) =>{
    let inputMsg = this.state.inputMsg;
    inputMsg = inputMsg.split("")
    inputMsg.splice(index,1)
    inputMsg = inputMsg.join("")
    let updatedLength = inputMsg.length;
    this.setState({
      inputMsg: inputMsg,
      inputLength: updatedLength
    })
  }


  render(){
    let charPara = '';
    let msg = this.state.inputMsg.split("");
    charPara = (
      <div>
        {msg.map((character,index)=>{
          return <CharComponent  char={character} click={(event)=>{this.charClickHandler(event,index)}}/>
        })}

      </div>
    );


    return (
      <div className="App">
        <h2>Udemy React Course- Assignment 2 </h2>
        <input type="text" onChange={this.inputHandler} value={this.state.inputMsg} />
        <p>Length of input field is : {this.state.inputLength}</p>
        <Validation length={this.state.inputLength} />
        <p> Click on Text box bellow to Remove</p>
        {charPara}
      </div>
    );
  }
}

export default App;
