import React, { Component } from "react";

class Cv extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="datosPersonales">
                    <div className="nombreApellido">
                        <h1>{this.props.data.firstName} {this.props.data.lastName}</h1>
                        <span>{this.props.data.title}</span>
                    </div>
                    <div className="otrosDatos">
                        <span>{this.props.data.city}</span>
                        <span>{this.props.data.email}</span>
                        <span>{this.props.data.phone}</span>
                    </div>
                </div>
                <div className="workExperience">
                    <h3>Work Experience</h3>
                    {this.props.data.workExperience.map((item) => {
                            return (
                                <div className="workItem">
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
                    {this.props.data.education.map((item) => {
                                return (
                                    <div className="educationItem">
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
}

export default Cv