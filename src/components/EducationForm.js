import React, { Component } from "react"

export default function EducationForm(props) {
    return (
        <form id={props.id}>
            <input id="college" onChange={props.changeFunc} placeholder="College Name"></input>
            <input id="title" onChange={props.changeFunc} placeholder="Title"></input>
            <input id="area" onChange={props.changeFunc} placeholder="Area"></input>
            <input id="from" onChange={props.changeFunc} placeholder="From"></input>
            <input id="to" onChange={props.changeFunc} placeholder="To"></input>
            <button type="button" onClick={props.deleteFunc}>Delete</button>
        </form>

    )
}


// class EducationForm extends Component{
//     render(){
//         return(
//             <form id={this.props.id}>
//                 <input id="college" onChange={this.props.changeFunc} placeholder="College Name"></input>
//                 <input id="title" onChange={this.props.changeFunc} placeholder="Title"></input>
//                 <input id="area" onChange={this.props.changeFunc} placeholder="Area"></input>
//                 <input id="from" onChange={this.props.changeFunc} placeholder="From"></input>
//                 <input id="to" onChange={this.props.changeFunc} placeholder="To"></input>
//                 <button type="button" onClick={this.props.deleteFunc}>Delete</button>
//             </form>
//         )
//     }
// }

// export default EducationForm