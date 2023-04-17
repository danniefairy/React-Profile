import React from "react";

function Info(props) {
    return (
        <div className="w3-container">
            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-blue"></i>{props.info.title}</p>
            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue"></i>{props.info.location}</p>
            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue"></i>{props.info.email}</p>
            <hr />

            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-blue"></i>Skills</b></p>
            {
                props.skills.map((skill) => {
                    return (
                        <div>
                            <p>{skill.name}</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                                <div className="w3-container w3-center w3-round-xlarge w3-blue" style={{ height: "15px", width: skill.level + "%" }}></div>
                            </div>
                        </div>
                    );
                })
            }
            <br />

            <p className="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-blue"></i>Tech Stack</b></p>
            {
                props.tools.map((tool) => {
                    return (
                        <div>
                            <p>{tool.name}</p>
                            <div className="w3-light-grey w3-round-xlarge">
                                <div className="w3-round-xlarge w3-blue" style={{ height: "15px", width: +tool.level+"%" }}></div>
                            </div>
                        </div>
                    );
                })
            }
            <br />

            <p className="w3-large w3-text-theme"><b><i class="fa fa-certificate fa-fw w3-margin-right w3-text-blue"></i>Education</b></p>
            {
                props.educations.map((education) => {
                    return (
                        <div>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>{education.school}</b></h5>
                                <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{education.period}</h6>
                                <p>{education.degree + " " + education.department}</p>
                                <hr />
                            </div>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Info;
