import React from "react";

function Experience(props) {
    return (
        <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>Work Experiences</h2>
            {
                props.experiences.map((experience) => {
                    return (
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>{experience.title + ", " + experience.company}</b></h5>
                            <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{experience.start_date} - {experience.end_date==="current"?<span className="w3-tag w3-blue w3-round">Current</span>: experience.end_date}</h6>
                            <p>{experience.description}</p>
                            <ul>
                                {
                                experience.details.map((detail) => {
                                    return <li>{detail}</li>
                                })
                                }
                            </ul>
                            <hr />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Experience;
