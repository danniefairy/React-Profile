import React from "react";
import Profile from "./Profile/Profile"
import Footer from "./Footer/Footer"
import info from "../data/info";
import experiences from "../data/experiences";
import skills from "../data/skills";
import tools from "../data/tools";
import achievements from "../data/achievements";
import educations from "../data/educations";

function App() {
  return (
    <div className="w3-light-grey">
      <Profile 
        info={info}
        experiences={experiences}
        skills={skills}
        tools={tools}
        achievements={achievements}
        educations={educations}
      />
      <Footer />
    </div>
  );
}

export default App;