'use client';
import React from "react";

import { Resume } from "./resume";
import { aboutMe, education, experience, skills } from "../api/data";
import { Skills } from "./skills";
import { Experience } from "./experience";
import { Education } from "./education";
import { About } from "./about";


export function SkillsInterface() {
    return <Skills
        skills={skills}
    />
};
export function ExperienceInterface() {

    return <Experience
        experience={experience}
    />;
};
export function EducationInterface() {
    return <Education
        education={education}
    />;
};

function AboutInterface() {
    return <About aboutMe={aboutMe} />
}

export function ResumeInterface() {
    return <Resume
        AboutMe={AboutInterface}
        Education={EducationInterface}
        Experience={ExperienceInterface}
        Skills={SkillsInterface}
    />
}
