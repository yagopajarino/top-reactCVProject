import React, { Component } from "react"
import Form from "./Form"

class ExperienceForm extends Component {
    render(){
        return(
            <form id={this.props.id}>
                <input id="position" onChange={this.props.changeFunc} placeholder="Position"></input>
                <input placeholder="Company"></input>
                <input placeholder="City"></input>
                <input placeholder="From"></input>
                <input placeholder="To"></input>
                <button type="button" onClick={this.props.deleteFunc}>Delete</button>
            </form>
        )
    }
}

export default ExperienceForm