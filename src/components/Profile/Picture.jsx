import React from "react";

function Picture() {
    return (
        <div className="w3-display-container">
            <img className="profile-img" src="https://danniefairy.github.io/React-Profile/images/Profile.jpg" alt="Avatar" />
            <br />
            <br />
            <div className="w3-display-bottomleft w3-container w3-text-black">
                <h2>Dannie Chen</h2>
            </div>
        </div>
    );
}

export default Picture;
