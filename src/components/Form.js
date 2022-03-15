import React, { Component } from "react";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm"
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
                id: uniqid(),
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
                    <h2>Work experience</h2>
                        {this.state.workExperience.map((item) => {
                            return <ExperienceForm key={item.id} id={item.id} changeFunc={this.handleWorkChange} deleteFunc={this.delWorkExp} data={item}/>
                        })}                        
                        <button onClick={this.addExperience} type="button">Add</button>
                    <h2>Education</h2>
                    {this.state.education.map((item) => {
                            return <EducationForm key={item.id} id={item.id} changeFunc={this.handleEducationChange} deleteFunc={this.delEducation} data={item}/>
                        })}                        
                        <button onClick={this.addEducation} type="button">Add</button>
                </div>
                    <Cv data={this.state}/>
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
        let prop = e.target.id
        let id = e.target.parentNode.id
        let index = this.state.workExperience.indexOf(this.state.workExperience.filter(item => item.id == id)[0])
        let items = [...this.state.workExperience]
        let copy = items[index]
        copy[prop] = e.target.value
        items[index] = copy
        this.setState({
            workExperience: items
        })
    }

    handleEducationChange =  (e) => {
        let prop = e.target.id
        let id = e.target.parentNode.id
        let index = this.state.education.indexOf(this.state.education.filter(item => item.id == id)[0])
        let items = [...this.state.education]
        let copy = items[index]
        copy[prop] = e.target.value
        items[index] = copy
        this.setState({
            education: items
        })

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

    addEducation = (e) => {
        let info = {
            id: uniqid(),
            college: "",
            title: "",
            area: "",
            from: "",
            to: ""
        }
        this.setState({
            education: this.state.education.concat(info)
        })

    }

    delWorkExp = (e) => {
        let id = e.target.parentNode.id
        this.setState({
            workExperience: this.state.workExperience.filter(item => item.id != id)
        })
    }

    delEducation = (e) => {
        let id = e.target.parentNode.id
        this.setState({
            education: this.state.education.filter(item => item.id != id)
        })

    }
}

export default Form