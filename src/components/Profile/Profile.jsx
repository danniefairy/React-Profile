import React from "react";
import Picture from "./Picture"
import Info from "./Info"
import Experience from "./Experience"
import Achievement from "./Achievement"


function Profile(props) {
    return (
        <div className="w3-content w3-margin-top profile">
            <div className="w3-row-padding">
                <div className="w3-third">
                    <div className="w3-white w3-text-grey w3-card-4">
                        <Picture />
                        <Info 
                            info={props.info}
                            skills={props.skills}
                            tools={props.tools}
                            educations={props.educations}
                        />
                    </div><br />
                </div>
                <div className="w3-twothird">
                    <Experience 
                        experiences={props.experiences}
                    />
                    <Achievement 
                        achievements={props.achievements}
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
