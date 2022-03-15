import React, { Component } from "react"

class EducationForm extends Component{
    render(){
        return(
            <form id={this.props.id}>
                <input id="college" onChange={this.props.changeFunc} placeholder="College Name"></input>
                <input id="title" onChange={this.props.changeFunc} placeholder="Title"></input>
                <input id="area" onChange={this.props.changeFunc} placeholder="Area"></input>
                <input id="from" onChange={this.props.changeFunc} placeholder="From"></input>
                <input id="to" onChange={this.props.changeFunc} placeholder="To"></input>
                <button type="button" onClick={this.props.deleteFunc}>Delete</button>
            </form>
        )
    }
}

export default EducationForm