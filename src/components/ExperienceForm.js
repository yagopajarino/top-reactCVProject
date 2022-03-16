import React, { Component } from "react"

export default function ExperienceForm(props) {
    return(
        <form id={props.id}>
            <input id="position" onChange={props.changeFunc} placeholder="Position"></input>
            <input id="company" onChange={props.changeFunc} placeholder="Company"></input>
            <input id="city" onChange={props.changeFunc} placeholder="City"></input>
            <input id="from" onChange={props.changeFunc} placeholder="From"></input>
            <input id="to" onChange={props.changeFunc} placeholder="To"></input>
            <button type="button" onClick={props.deleteFunc}>Delete</button>
        </form>
    )

}

// class ExperienceForm extends Component {
//     render(){
//         return(
//             <form id={this.props.id}>
//                 <input id="position" onChange={this.props.changeFunc} placeholder="Position"></input>
//                 <input id="company" onChange={this.props.changeFunc} placeholder="Company"></input>
//                 <input id="city" onChange={this.props.changeFunc} placeholder="City"></input>
//                 <input id="from" onChange={this.props.changeFunc} placeholder="From"></input>
//                 <input id="to" onChange={this.props.changeFunc} placeholder="To"></input>
//                 <button type="button" onClick={this.props.deleteFunc}>Delete</button>
//             </form>
//         )
//     }
// }

// export default ExperienceForm