import React from "react";

import { Resume } from "./resume";
import { aboutMe, education, experience, skills } from "../api/data";


export function ResumeInterface() {
    return <Resume
        aboutMe={aboutMe}
        education={education}
        experience={experience}
        skills={skills}
    />
}
