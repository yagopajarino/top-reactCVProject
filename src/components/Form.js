import React, { Component, useState } from "react";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm"
import uniqid from "uniqid";
import Cv from "./Cv"
import { render } from "@testing-library/react";

export default function Form() {
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [description, setDescription] = useState("")
    const [workExperience, setWorkExperience] = useState([{
        id: uniqid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: ""}])
    const [education, setEducation] = useState([{
        id: uniqid(),
        college: "",
        title: "",
        area: "",
        from: "",
        to: ""
    }])

    function handleWorkChange(e) {
        let prop = e.target.id
        let id = e.target.parentNode.id
        let index = workExperience.indexOf(workExperience.filter(item => item.id == id)[0])
        let items = [...workExperience]
        let copy = items[index]
        copy[prop] = e.target.value
        items[index] = copy
        setWorkExperience(items)
    }

    function handleEducationChange(e) {
        let prop = e.target.id
        let id = e.target.parentNode.id
        let index = education.indexOf(education.filter(item => item.id == id)[0])
        let items = [...education]
        let copy = items[index]
        copy[prop] = e.target.value
        items[index] = copy
        setEducation(items)
    }

    function addExperience(e) {
        let info = {
            id: uniqid(),
            position: "",
            company: "",
            city: "",
            from: "",
            to: ""
        }
        setWorkExperience(workExperience.concat(info))
    }

    function addEducation(e) {
        let info = {
            id: uniqid(),
            college: "",
            title: "",
            area: "",
            from: "",
            to: ""
        }
        setEducation(education.concat(info))
    }

    function delWorkExp(e) {
        let id = e.target.parentNode.id
        setWorkExperience(workExperience.filter(item => item.id != id))
    }

    function delEducation(e) {
        let id = e.target.parentNode.id
        setEducation(education.filter(item => item.id != id))
    }

    function logState() {
        console.log(workExperience)
    }

    return (
        <main>
        <div className="container">
            <h2>Personal Information</h2>
            <form>
                <input id="firstName" onChange={e => setFirstname(e.target.value)} placeholder="First name"></input>
                <input id="lastName" onChange={e => setLastname(e.target.value)} placeholder="Last name"></input>
                <input id="title" onChange={e => setTitle(e.target.value)} placeholder="Title"></input>
                <input id="city" onChange={e => setCity(e.target.value)} placeholder="City"></input>
                <input id="email" onChange={e => setEmail(e.target.value)} placeholder="Email"></input>
                <input id="phone" onChange={e => setPhone(e.target.value)} placeholder="Phone"></input>
                <input id="description" onChange={e => setDescription(e.target.value)} placeholder="Description"></input>
            </form>
            <h2>Work experience</h2>
                {workExperience.map((item) => {
                    return <ExperienceForm key={item.id} id={item.id} changeFunc={handleWorkChange} deleteFunc={delWorkExp} data={item}/>
                })}                        
                <button onClick={addExperience} type="button">Add</button>
            <h2>Education</h2>
            {education.map((item) => {
                    return <EducationForm key={item.id} id={item.id} changeFunc={handleEducationChange} deleteFunc={delEducation} data={item}/>
                })}                        
                <button onClick={addEducation} type="button">Add</button>
        </div>
            <Cv data={{firstName, lastName, title, city, email, phone, description, workExperience, education}}/>
            <button onClick={logState}>Log state</button>
    </main>
    )
}

// class Form extends Component {
//     constructor(){
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             title: "",
//             city: "",
//             email: "",
//             phone: "",
//             description: "",
//             workExperience: [{
//                 id: uniqid(),
//                 position: "",
//                 company: "",
//                 city: "",
//                 from: "",
//                 to: ""
//             }],
//             education:[{
//                 id: uniqid(),
//                 college: "",
//                 title: "",
//                 area: "",
//                 from: "",
//                 to: ""
//             }]
//         }
//     }
//     render(){
//         return (
//             <main>
//                 <div className="container">
//                     <h2>Personal Information</h2>
//                     <form>
//                         <input id="firstName" onChange={this.handleChange} placeholder="First name"></input>
//                         <input id="lastName" onChange={this.handleChange} placeholder="Last name"></input>
//                         <input id="title" onChange={this.handleChange} placeholder="Title"></input>
//                         <input id="city" onChange={this.handleChange} placeholder="City"></input>
//                         <input id="email" onChange={this.handleChange} placeholder="Email"></input>
//                         <input id="phone" onChange={this.handleChange} placeholder="Phone"></input>
//                         <input id="description" onChange={this.handleChange} placeholder="Description"></input>
//                     </form>
//                     <h2>Work experience</h2>
//                         {this.state.workExperience.map((item) => {
//                             return <ExperienceForm key={item.id} id={item.id} changeFunc={this.handleWorkChange} deleteFunc={this.delWorkExp} data={item}/>
//                         })}                        
//                         <button onClick={this.addExperience} type="button">Add</button>
//                     <h2>Education</h2>
//                     {this.state.education.map((item) => {
//                             return <EducationForm key={item.id} id={item.id} changeFunc={this.handleEducationChange} deleteFunc={this.delEducation} data={item}/>
//                         })}                        
//                         <button onClick={this.addEducation} type="button">Add</button>
//                 </div>
//                     <Cv data={this.state}/>
//             </main>
//         )
//     }

//     handleChange = (e) => {
//         let id = e.target.id
//         this.setState({
//            [id]: e.target.value
//         })
//     }

//     handleWorkChange = (e) => {
//         let prop = e.target.id
//         let id = e.target.parentNode.id
//         let index = this.state.workExperience.indexOf(this.state.workExperience.filter(item => item.id == id)[0])
//         let items = [...this.state.workExperience]
//         let copy = items[index]
//         copy[prop] = e.target.value
//         items[index] = copy
//         this.setState({
//             workExperience: items
//         })
//     }

//     handleEducationChange =  (e) => {
//         let prop = e.target.id
//         let id = e.target.parentNode.id
//         let index = this.state.education.indexOf(this.state.education.filter(item => item.id == id)[0])
//         let items = [...this.state.education]
//         let copy = items[index]
//         copy[prop] = e.target.value
//         items[index] = copy
//         this.setState({
//             education: items
//         })

//     }

//     addExperience = (e) => {
//         let info = {
//             id: uniqid(),
//             position: "",
//             company: "",
//             city: "",
//             from: "",
//             to: ""
//         }
//         this.setState({
//             workExperience: this.state.workExperience.concat(info)
//         })
//     }

//     addEducation = (e) => {
//         let info = {
//             id: uniqid(),
//             college: "",
//             title: "",
//             area: "",
//             from: "",
//             to: ""
//         }
//         this.setState({
//             education: this.state.education.concat(info)
//         })

//     }

//     delWorkExp = (e) => {
//         let id = e.target.parentNode.id
//         this.setState({
//             workExperience: this.state.workExperience.filter(item => item.id != id)
//         })
//     }

//     delEducation = (e) => {
//         let id = e.target.parentNode.id
//         this.setState({
//             education: this.state.education.filter(item => item.id != id)
//         })

//     }
// }

