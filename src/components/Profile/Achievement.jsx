import React from "react";

function Achievement(props) {
    return (
        <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-trophy fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>Achievements</h2>
            {
                props.achievements.map((achievement) => {
                    return (
                        <div>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>{achievement.name}</b></h5>
                                <h6 className="w3-text-blue"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{achievement.time}</h6>
                                <p>{achievement.description}</p>
                                <hr />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Achievement;
