import React from 'react';

export interface ResumeInputType {
  fieldName: string;
  fieldValue: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  businessImpact?: string[];
  technologies?: string[];
  achievements?: string[];
  icon: React.ReactElement;
  name: string;
  institution: string;
  degree: string;
}

export interface ExperienceType {
  title: string;
  description: string;
  info: Partial<ResumeInputType>[];
  icons: string;
  skillsList: Partial<ResumeInputType>[];
}

export type ExperienceTypi = Partial<ExperienceType> & {
  items: Partial<ResumeInputType>[];
};
export type EducationType = Partial<ExperienceType | ExperienceTypi>;
