import React, { Component } from "react";
import uniqid from "uniqid";

export default function Cv(props) {
    return (
        <div className="container">
            <div className="datosPersonales">
                <div className="nombreApellido">
                    <h1>{props.data.firstName} {props.data.lastName}</h1>
                    <span>{props.data.title}</span>
                </div>
                <div className="otrosDatos">
                    <span>{props.data.city}</span>
                    <span>{props.data.email}</span>
                    <span>{props.data.phone}</span>
                </div>
            </div>
            <div className="workExperience">
                <h3>Work Experience</h3>
                {props.data.workExperience.map((item) => {
                        return (
                            <div key={uniqid()} className="workItem">
                                <span className="strong">{item.position}</span>
                                <span>{item.company}</span>
                                <span>{item.city}</span>
                                <span>{item.from} - {item.to}</span>
                            </div>
                        )
                })} 
            </div>
            <div className="education">
                <h3>Education</h3>
                {props.data.education.map((item) => {
                            return (
                                <div key={uniqid()} className="educationItem">
                                    <span className="strong">{item.college}</span>
                                    <span>{item.title}</span>
                                    <span>{item.area}</span>
                                    <span>{item.from} - {item.to}</span>
                                </div>
                            )
                    })}
            </div>
        </div>

    )
}



// class Cv extends Component {
    
//     render() {
//         return (
//             <div className="container">
//                 <div className="datosPersonales">
//                     <div className="nombreApellido">
//                         <h1>{props.data.firstName} {props.data.lastName}</h1>
//                         <span>{props.data.title}</span>
//                     </div>
//                     <div className="otrosDatos">
//                         <span>{props.data.city}</span>
//                         <span>{props.data.email}</span>
//                         <span>{props.data.phone}</span>
//                     </div>
//                 </div>
//                 <div className="workExperience">
//                     <h3>Work Experience</h3>
//                     {props.data.workExperience.map((item) => {
//                             return (
//                                 <div className="workItem">
//                                     <span className="strong">{item.position}</span>
//                                     <span>{item.company}</span>
//                                     <span>{item.city}</span>
//                                     <span>{item.from} - {item.to}</span>
//                                 </div>
//                             )
//                     })} 
//                 </div>
//                 <div className="education">
//                     <h3>Education</h3>
//                     {props.data.education.map((item) => {
//                                 return (
//                                     <div className="educationItem">
//                                         <span className="strong">{item.college}</span>
//                                         <span>{item.title}</span>
//                                         <span>{item.area}</span>
//                                         <span>{item.from} - {item.to}</span>
//                                     </div>
//                                 )
//                         })}
//                 </div>
//             </div>
//         )
//     }
// }

// export default Cv