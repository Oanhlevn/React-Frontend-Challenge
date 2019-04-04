import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { message: "", encriptedMess: "" };
  }

  Encript(string) {
    let wordsArray = string.split(" ");
    if (wordsArray == null) {
      let wordArray = [];
      for (let i = 0; i <= string.length; i++) {

        wordArray.push(string.charAt(i));
      }
      return wordArray.reverse.join('');

    }
    else {
      let encriptedArray = [];
      for (let i = 0; i < wordsArray.length; i++) {
        let wordArray = [];
        for (let j = 0; j <= wordsArray[i].length; j++) { wordArray.push(wordsArray[i].charAt(j)) }
        let encriptedWord = wordArray.reverse().join('');

        encriptedArray.push(encriptedWord);
      }
      return encriptedArray.join(" ");
    }
  }

  updateInput(event) {
    this.setState({ message: event.target.value });
    let encripted = this.Encript(this.state.message);
    this.setState({ encriptedMess: encripted });

  }
  render() {
    return (
      <div className="App">
        <div> <h1> Input  </h1>
          <input type="textarea" row="4" placeholder="Enter your message here!" onChange={e => this.updateInput(e)} />

        </div > <h1> Output </h1>
        <label>  {this.state.encriptedMess} </label>
        <div>

        </div>


      </div>
    );
  }
}

export default App;
