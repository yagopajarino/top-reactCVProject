import React, { Component } from "react";
import ExperienceForm from "./ExperienceForm";
import uniqid from "uniqid";
import Cv from "./Cv"

class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            city: "",
            email: "",
            phone: "",
            description: "",
            workExperience: [{
                id: uniqid(),
                position: "",
                company: "",
                city: "",
                from: "",
                to: ""
            }],
            education:[{
                college: "",
                title: "",
                area: "",
                from: "",
                to: ""
            }]
        }
    }
    render(){
        return (
            <main>
                <div className="container">
                    <h2>Personal Information</h2>
                    <form>
                        <input id="firstName" onChange={this.handleChange} placeholder="First name"></input>
                        <input id="lastName" onChange={this.handleChange} placeholder="Last name"></input>
                        <input id="title" onChange={this.handleChange} placeholder="Title"></input>
                        <input placeholder="Photo"></input>
                        <input id="city" onChange={this.handleChange} placeholder="City"></input>
                        <input id="email" onChange={this.handleChange} placeholder="Email"></input>
                        <input id="phone" onChange={this.handleChange} placeholder="Phone"></input>
                        <input id="description" onChange={this.handleChange} placeholder="Description"></input>
                    </form>
                    <h2>Experience</h2>
                        {this.state.workExperience.map((item) => {
                            return <ExperienceForm key={item.id} id={item.id} changeFunc={this.handleWorkChange} deleteFunc={this.delWorkExp} data={item}/>
                        })}                        
                        <button onClick={this.addExperience} type="button">Add</button>
                    <h2>Education</h2>
                    <form>
                        <input placeholder="College Name"></input>
                        <input placeholder="Title"></input>
                        <input placeholder="Area"></input>
                        <input placeholder="From"></input>
                        <input placeholder="To"></input>
                        <button>Delete</button>
                        <button>Add</button>
                    </form>
                </div>
                    <Cv data={this.state}/>
                    <button onClick={this.logState}>Log state</button>
            </main>
        )
    }

    handleChange = (e) => {
        let id = e.target.id
        this.setState({
           [id]: e.target.value
        })
    }

    handleWorkChange = (e) => {
        console.log("here")
        let prop = e.target.id
        let id = e.target.parentNode.id
        let index = this.state.workExperience.indexOf(this.state.workExperience.filter(item => item.id == id)[0])
        let items = [...this.state.workExperience]
        console.log(items)
        let item = [items[index]]
        console.log(item)
        item[prop] = e.target.value
        items[index] = item
        console.log(items)
        this.setState({items})
    }

    addExperience = (e) => {
        let info = {
            id: uniqid(),
            position: "",
            company: "",
            city: "",
            from: "",
            to: ""
        }
        this.setState({
            workExperience: this.state.workExperience.concat(info)
        })
    }

    delWorkExp = (e) => {
        let id = e.target.parentNode.id
        console.log(id)
        console.log(this.state.workExperience)
        this.setState({
            workExperience: this.state.workExperience.filter(item => item.id != id)
        })
    }

   logState = () => {
       console.log(this.state)
   }
    
}

export default Form