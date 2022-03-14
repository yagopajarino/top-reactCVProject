import React, { Component } from "react"
import Form from "./Form"
import Cv from "./Cv"
import "../styles/style.css"


class App extends Component{
  render(){
    return (
      <div className="App">
        <Form data={this.state}/>
      </div>
    );
  }
}
  

export default App;
