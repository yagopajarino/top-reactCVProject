import React, { Component } from "react"
import Form from "./Form"
import Cv from "./Cv"
import "../styles/style.css"


class App extends Component{
  render(){
    return (
      <div className="App">
        <h1 className="title">CV generator</h1>
        <Form data={this.state}/>
        <footer>2022 | Yago Pajariño</footer>
      </div>
    );
  }
}
  

export default App;
